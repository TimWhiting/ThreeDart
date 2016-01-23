part of ThreeDart.Movers;

class Group extends Mover {

  List<Mover> _movers;

  Group() {
    this._movers = new List<Mover>();
  }

  List<Mover> get list => this._movers;

  void add(Mover mover) {
    this._movers.add(mover);
  }

  Math.Matrix4 update(Core.RenderState state, Movable obj) {
    Math.Matrix4 mat = null;
    for (Mover mover in this._movers) {
      if (mover != null) {
        Math.Matrix4 next = mover.update(state, obj);
        if (next != null) {
          if (mat == null) {
            mat = next;
          } else {
            mat = mat*next;
          }
        }
      }
    }
    if (mat == null) {
      mat = new Math.Matrix4.identity();
    }
    return mat;
  }
}
