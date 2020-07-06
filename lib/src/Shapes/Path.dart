part of ThreeDart.Shapes;

/// The path to a node in the octree.
class Path {
  /// The maximum allowed depth value.
  static const int maxDepth = 31;

  /// The maximum allowed value for any component, 2^32 - 1.
  static const int maxValue = 4294967295;

  /// The x component of the path.
  final int x;
  
  /// The y component of the path.
  final int y;

  /// The z component of the path.
  final int z;
  
  /// The depth of the path to read the components.
  final int depth;

  /// Determines the path to the given location within the given maximum cube.
  factory Path.fromPoint(Math.Point3 loc, Math.Cube maxCube, [int depth = maxDepth]) {
    double scalar = maxDepth / maxCube.size;
    return new Path(
      ((loc.x - maxCube.x)*scalar).round(),
      ((loc.y - maxCube.y)*scalar).round(),
      ((loc.z - maxCube.z)*scalar).round(),
      depth);
  }

  /// Constructs a path with the given coordinates and depth.
  factory Path(int x, int y, int z, [int depth = maxDepth]) {
    if (x < 0 || x > maxValue)
      throw new Exception("X component in the path must be between 0 and $maxValue ($x)");
    if (y < 0 || y > maxValue)
      throw new Exception("Y component in the path must be between 0 and $maxValue ($y)");
    if (z < 0 || z > maxValue)
      throw new Exception("Z component in the path must be between 0 and $maxValue ($z)");
    if (depth < 0 || depth > maxDepth)
      throw new Exception("Depth in the path must be between 0 and $maxDepth ($depth)");
    return new Path._(x, y, z, depth);
  }

  /// Internal constructor to assign final values.
  Path._(this.x, this.y, this.z, this.depth);

  /// Determines the common path between this and the other path.
  Path common(Path other) {
    int depth = (this.depth < other.depth)? this.depth: other.depth;
    int diff = (this.x ^ other.x) | (this.y ^ other.y) | (this.z ^ other.z);
    int fullMask = 0x00;
    for (int d = 0, mask = 0x01; d < depth; d++, mask <<= 1) {
      if (diff & mask != 0x00) {
        depth = d;
        break;
      }
      fullMask |= mask;
    }
    return new Path(this.x & fullMask, this.y & fullMask, this.z & fullMask, depth);
  }

  /// This gets the location this path is for in the given maximum cube.
  /// This does not take into account the depth.
  Math.Point3 location(Math.Cube maxCube) {
    double scalar = maxCube.size / maxDepth;
    return new Math.Point3(
      this.x * scalar + maxCube.x,
      this.y * scalar + maxCube.y,
      this.z * scalar + maxCube.z);
  }

  /// Gets the octree child index, 0 to 7, to take in this path at the given depth.
  int childIndexAt(int depth) {
    int mask = 1 << depth;
    int childIndex = 0;
    if (this.x & mask != 0x00) childIndex |= 1;
    if (this.y & mask != 0x00) childIndex |= 2;
    if (this.z & mask != 0x00) childIndex |= 4;
    return childIndex;
  }

  /// Gets the string for this path in binary.
  String toString() {
    StringBuffer xstr = new StringBuffer();
    StringBuffer ystr = new StringBuffer();
    StringBuffer zstr = new StringBuffer();
    for (int d = 0, x = 0, mask = 0x01; d < this.depth; d++, x++, mask <<= 1) {
      if (x == 4) {
        x = 0;
        xstr.write(" ");
        ystr.write(" ");
        zstr.write(" ");
      }
      xstr.write((this.x & mask != 0x00)? "1": "0");
      ystr.write((this.y & mask != 0x00)? "1": "0");
      zstr.write((this.z & mask != 0x00)? "1": "0");
    }
    return "[${xstr.toString()}, ${ystr.toString()}, ${zstr.toString()}]";
  }
}
