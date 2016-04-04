part of ThreeDart.Shaders;

/// A shader for rendering a reflective solid color light.
class ReflSolid extends Shader {

  /// The name for this shader.
  static const String defaultName = "Reflective Solid";

  /// The vertex shader source code in glsl.
  static String _vertexSource =
      "uniform mat4 viewObjMat;                                   \n"+
      "uniform mat4 viewMat;                                      \n"+
      "uniform mat4 projViewObjMat;                               \n"+
      "uniform vec3 lightVec;                                     \n"+
      "                                                           \n"+
      "attribute vec3 posAttr;                                    \n"+
      "attribute vec3 normAttr;                                   \n"+
      "                                                           \n"+
      "varying vec3 normal;                                       \n"+
      "varying vec3 litVec;                                       \n"+
      "varying vec3 camPos;                                       \n"+
      "                                                           \n"+
      "void main()                                                \n"+
      "{                                                          \n"+
      "   camPos = (viewMat*vec4(0.0, 0.0, 0.0, -1.0)).xyz;       \n"+
      "   normal = normalize(viewObjMat*vec4(normAttr, 0.0)).xyz; \n"+
      "   litVec = normalize((viewMat*vec4(lightVec, 0.0)).xyz);  \n"+
      "   gl_Position = projViewObjMat*vec4(posAttr, 1.0);        \n"+
      "}                                                          \n";

  /// The fragment shader source code in glsl.
  static String _fragmentSource =
      "precision mediump float;                                      \n"+
      "                                                              \n"+
      'uniform mat4 invViewMat;                                      \n'+
      "uniform vec4 lightClr;                                        \n"+
      "uniform vec4 emissionClr;                                     \n"+
      "uniform vec4 ambientClr;                                      \n"+
      "uniform vec4 diffuseClr;                                      \n"+
      "uniform vec4 specularClr;                                     \n"+
      "uniform float shininess;                                      \n"+
      'uniform samplerCube envSampler;                               \n'+
      'uniform float refraction;                                     \n'+
      'uniform vec4 reflectClr;                                      \n'+
      'uniform vec4 refractClr;                                      \n'+
      "                                                              \n"+
      "varying vec3 normal;                                          \n"+
      "varying vec3 litVec;                                          \n"+
      "varying vec3 camPos;                                          \n"+
      "                                                              \n"+
      "vec4 diffuse(vec3 norm)                                       \n"+
      "{                                                             \n"+
      "   if (diffuseClr.w <= 0.0) return vec4(0.0, 0.0, 0.0, 0.0);  \n"+
      "   float scalar = dot(norm, -litVec);                         \n"+
      "   return diffuseClr*max(scalar, 0.0);                        \n"+
      "}                                                             \n"+
      "                                                              \n"+
      "vec4 specular(vec3 norm)                                      \n"+
      "{                                                             \n"+
      "   if (specularClr.w <= 0.0) return vec4(0.0, 0.0, 0.0, 0.0); \n"+
      "   if(dot(norm, -litVec) > 0.0)                               \n"+
      "   {                                                          \n"+
      "      vec3 lightRef = normalize(reflect(litVec, norm));       \n"+
      "      float scalar = dot(lightRef, normalize(camPos));        \n"+
      "      if(scalar > 0.0)                                        \n"+
      "      {                                                       \n"+
      "         return specularClr*pow(scalar, shininess);           \n"+
      "      }                                                       \n"+
      "   }                                                          \n"+
      "   return vec4(0.0, 0.0, 0.0, 0.0);                           \n"+
      "}                                                             \n"+
      "                                                              \n"+
      "vec4 reflRefr(vec3 norm)                                      \n"+
      "{                                                             \n"+
      "   vec3 refl = reflect(normalize(camPos), norm);              \n"+
      "   vec4 clr = vec4(0.0, 0.0, 0.0, 1.0);                       \n"+
      "   if (reflectClr.a > 0.0) {                                  \n"+
      "     vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));         \n"+
      "     clr += textureCube(envSampler, invRefl)*reflectClr;      \n"+
      "   }                                                          \n"+
      "   if (refractClr.a > 0.0) {                                  \n"+
      "     vec3 refr = mix(-refl, camPos, refraction);              \n"+
      "     vec3 invRefr = vec3(invViewMat*vec4(refr, 0.0));         \n"+
      "     clr += textureCube(envSampler, invRefr)*refractClr;      \n"+
      "   }                                                          \n"+
      "   return clr;                                                \n"+
      "}                                                             \n"+
      "                                                              \n"+
      "void main()                                                   \n"+
      "{                                                             \n"+
      "   vec3 norm = normalize(normal);                             \n"+
      "   vec4 clr = ambientClr + diffuse(norm) + specular(norm);    \n"+
      "   gl_FragColor = emissionClr + lightClr*clr +reflRefr(norm); \n"+
      "}                                                             \n";

  Attribute _posAttr;
  Attribute _normAttr;
  Uniform3f _lightVec;
  Uniform4f _lightClr;
  Uniform4f _emissionClr;
  Uniform4f _ambientClr;
  Uniform4f _diffuseClr;
  Uniform4f _specularClr;
  Uniform1f _shininess;
  UniformSamplerCube _envSampler;
  Uniform1f _refraction;
  Uniform4f _reflectClr;
  Uniform4f _refractClr;
  UniformMat4 _invViewMat;
  UniformMat4 _viewObjMat;
  UniformMat4 _viewMat;
  UniformMat4 _projViewObjMat;

  /// Checks for the shader in the shader cache in the given [state],
  /// if it is not found then this shader is compiled and added
  /// to the shader cache before being returned.
  factory ReflSolid.cached(Core.RenderState state) {
    ReflSolid shader = state.shader(defaultName);
    if (shader == null) {
      shader = new ReflSolid(state.gl);
      state.addShader(shader);
    }
    return shader;
  }

  /// Compiles this shader for the given rendering context.
  ReflSolid(WebGL.RenderingContext gl): super(gl, defaultName) {
    this.initialize(_vertexSource, _fragmentSource);
    this._posAttr        = this.attributes["posAttr"];
    this._normAttr       = this.attributes["normAttr"];
    this._lightVec       = this.uniforms["lightVec"] as Uniform3f;
    this._lightClr       = this.uniforms["lightClr"] as Uniform4f;
    this._emissionClr    = this.uniforms["emissionClr"] as Uniform4f;
    this._ambientClr     = this.uniforms["ambientClr"] as Uniform4f;
    this._diffuseClr     = this.uniforms["diffuseClr"] as Uniform4f;
    this._specularClr    = this.uniforms["specularClr"] as Uniform4f;
    this._shininess      = this.uniforms["shininess"] as Uniform1f;
    this._envSampler     = this.uniforms["envSampler"] as UniformSamplerCube;
    this._refraction     = this.uniforms["refraction"] as Uniform1f;
    this._reflectClr     = this.uniforms["reflectClr"] as Uniform4f;
    this._refractClr     = this.uniforms["refractClr"] as Uniform4f;
    this._invViewMat     = this.uniforms["invViewMat"] as UniformMat4;
    this._viewObjMat     = this.uniforms["viewObjMat"] as UniformMat4;
    this._viewMat        = this.uniforms["viewMat"] as UniformMat4;
    this._projViewObjMat = this.uniforms["projViewObjMat"] as UniformMat4;
  }

  /// The position vertex shader attribute.
  Attribute get posAttr => this._posAttr;

  /// The normal vertex shader attribute.
  Attribute get normAttr => this._normAttr;

  /// The direction the light is pointing.
  Math.Vector3 get lightVector => this._lightVec.getVector3();
  set lightVector(Math.Vector3 vec) => this._lightVec.setVector3(vec);

  /// The color of the light.
  Math.Color4 get lightColor => this._lightClr.getColor4();
  set lightColor(Math.Color4 clr) => this._lightClr.setColor4(clr);

  /// Sets the directional light's vector and color.
  void setLight(Lights.Directional light) {
    this.lightVector = light.direction;
    this.lightColor = light.color;
  }

  /// The emission color of the object.
  Math.Color4 get emissionColor => this._emissionClr.getColor4();
  set emissionColor(Math.Color4 clr) => this._emissionClr.setColor4(clr);

  /// The ambient color of the object.
  Math.Color4 get ambientColor => this._ambientClr.getColor4();
  set ambientColor(Math.Color4 clr) => this._ambientClr.setColor4(clr);

  /// The diffuse color of the object.
  Math.Color4 get diffuseColor => this._diffuseClr.getColor4();
  set diffuseColor(Math.Color4 clr) => this._diffuseClr.setColor4(clr);

  /// The specular color of the object.
  Math.Color4 get specularColor => this._specularClr.getColor4();
  set specularColor(Math.Color4 clr) => this._specularClr.setColor4(clr);

  /// The shininess value of the specualr.
  double get shininess => this._shininess.getValue();
  set shininess(double value) => this._shininess.setValue(value);

  /// The environment map texture of the object.
  set environmentMap(Textures.TextureCube txt) =>
    this._envSampler.setTextureCube(txt);

  /// The refraction weight value of the object.
  double get refraction => this._refraction.getValue();
  set refraction(double value) => this._refraction.setValue(value);

  /// The reflection color and amount of the object.
  Math.Color4 get reflectColor => this._reflectClr.getColor4();
  set reflectColor(Math.Color4 clr) => this._reflectClr.setColor4(clr);

  /// The reflection color and amount of the object.
  Math.Color4 get refractColor => this._refractClr.getColor4();
  set refractColor(Math.Color4 clr) => this._refractClr.setColor4(clr);

  /// Sets the material's colors.
  void setMaterial(Materials.ReflSolid material) {
    this.emissionColor = material.emission;
    this.ambientColor = material.ambient;
    this.diffuseColor = material.diffuse;
    this.specularColor = material.specular;
    this.shininess = material.shininess;
    this.environmentMap = material.environment;
    this.refraction = material.refraction;
    this.reflectColor = material.reflectScalar;
    this.refractColor = material.refractScalar;
  }

  /// The view matrix multiplied by the object matrix.
  Math.Matrix4 get viewObjectMatrix => this._viewObjMat.getMatrix4();
  set viewObjectMatrix(Math.Matrix4 mat) => this._viewObjMat.setMatrix4(mat);

  /// The view matrix.
  Math.Matrix4 get viewMatrix => this._viewMat.getMatrix4();
  set viewMatrix(Math.Matrix4 mat) => this._viewMat.setMatrix4(mat);

  /// The product of the projection matrix, view matrix, and object matrix.
  Math.Matrix4 get projectViewObjectMatrix => this._projViewObjMat.getMatrix4();
  set projectViewObjectMatrix(Math.Matrix4 mat) => this._projViewObjMat.setMatrix4(mat);

  /// The inverse of the view matrix..
  Math.Matrix4 get inverseViewMatrix => this._invViewMat.getMatrix4();
  set inverseViewMatrix(Math.Matrix4 mat) => this._invViewMat.setMatrix4(mat);
}
