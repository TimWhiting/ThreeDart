part of ThreeDart.Shaders;

/// A shader for renderin texture 2D directional light.
class Texture2DDirectional extends Shader {

  /// The name for this shader.
  static const String defaultName = "Texture2D Directional";

  /// The vertex shader source code in glsl.
  static String _vertexSource =
      "uniform mat4 objMat;                                        \n"+
      "uniform mat4 viewMat;                                       \n"+
      "uniform mat4 projMat;                                       \n"+
      "uniform vec3 lightVec;                                      \n"+
      "                                                            \n"+
      "attribute vec3 posAttr;                                     \n"+
      "attribute vec3 normAttr;                                    \n"+
      "attribute vec2 txtAttr;                                     \n"+
      "                                                            \n"+
      "varying vec3 normal;                                        \n"+
      "varying vec3 litVec;                                        \n"+
      "varying vec3 camPos;                                        \n"+
      "varying vec2 txt2D;                                         \n"+
      "                                                            \n"+
      "void main()                                                 \n"+
      "{                                                           \n"+
      "   camPos = (viewMat*vec4(0.0, 0.0, 0.0, -1.0)).xyz;        \n"+
      "   normal = normalize(objMat*vec4(normAttr, 0.0)).xyz;      \n"+
      "   litVec = normalize((viewMat*vec4(lightVec, 0.0)).xyz);   \n"+
      "   gl_Position = projMat*viewMat*objMat*vec4(posAttr, 1.0); \n"+
      "   txt2D = txtAttr;                                         \n"+
      "}                                                           \n";

  /// The fragment shader source code in glsl.
  static String _fragmentSource =
      "precision mediump float;                                     \n"+
      "                                                             \n"+
      "uniform vec3 lightClr;                                       \n"+
      "uniform sampler2D emissionTxt;                               \n"+
      "uniform sampler2D ambientTxt;                                \n"+
      "uniform sampler2D diffuseTxt;                                \n"+
      "uniform sampler2D specularTxt;                               \n"+
      "uniform int hasEmission;                                     \n"+
      "uniform int hasAmbient;                                      \n"+
      "uniform int hasDiffuse;                                      \n"+
      "uniform int hasSpecular;                                     \n"+
      "uniform float shininess;                                     \n"+
      "                                                             \n"+
      "varying vec3 normal;                                         \n"+
      "varying vec3 litVec;                                         \n"+
      "varying vec3 camPos;                                         \n"+
      "varying vec2 txt2D;                                          \n"+
      "                                                             \n"+
      "vec4 emission()                                              \n"+
      "{                                                            \n"+
      "   if (hasEmission == 0) return vec4(0.0, 0.0, 0.0, 0.0);    \n"+
      "   return texture2D(emissionTxt, txt2D);                     \n"+
      "}                                                            \n"+
      "                                                             \n"+
      "vec4 ambient()                                               \n"+
      "{                                                            \n"+
      "   if (hasAmbient == 0) return vec4(0.0, 0.0, 0.0, 0.0);     \n"+
      "   return texture2D(ambientTxt, txt2D);                      \n"+
      "}                                                            \n"+
      "                                                             \n"+
      "vec4 diffuse(vec3 norm)                                      \n"+
      "{                                                            \n"+
      "   if (hasDiffuse == 0) return vec4(0.0, 0.0, 0.0, 0.0);     \n"+
      "   float scalar = dot(norm, litVec);                         \n"+
      "   vec4 diffuseClr = texture2D(diffuseTxt, txt2D);           \n"+
      "   return diffuseClr*max(scalar, 0.0);                       \n"+
      "}                                                            \n"+
      "                                                             \n"+
      "vec4 specular(vec3 norm)                                     \n"+
      "{                                                            \n"+
      "   if (hasSpecular == 0) return vec4(0.0, 0.0, 0.0, 0.0);    \n"+
      "   vec3 lightRef = normalize(reflect(litVec, norm));         \n"+
      "   float scalar = dot(lightRef, normalize(camPos));          \n"+
      "   if(scalar > 0.0)                                          \n"+
      "   {                                                         \n"+
      "      vec4 specularClr = texture2D(specularTxt, txt2D);      \n"+
      "      return specularClr*max(pow(scalar, shininess), 0.0);   \n"+
      "   }                                                         \n"+
      "   else return vec4(0.0, 0.0, 0.0, 0.0);                     \n"+
      "}                                                            \n"+
      "                                                             \n"+
      "void main()                                                  \n"+
      "{                                                            \n"+
      "   vec3 norm = normalize(normal);                            \n"+
      "   vec4 matClr = ambient() + diffuse(norm) + specular(norm); \n"+
      "   gl_FragColor = emission() + vec4(lightClr, 1.0)*matClr;   \n"+
      "}                                                            \n";

  Attribute _posAttr;
  Attribute _normAttr;
  Attribute _txtAttr;
  Uniform3f _lightVec;
  Uniform3f _lightClr;
  UniformSampler2D _emissionTxt;
  UniformSampler2D _ambientTxt;
  UniformSampler2D _diffuseTxt;
  UniformSampler2D _specularTxt;
  Uniform1i _hasEmission;
  Uniform1i _hasAmbient;
  Uniform1i _hasDiffuse;
  Uniform1i _hasSpecular;
  Uniform1f _shininess;
  UniformMat4 _objMat;
  UniformMat4 _viewMat;
  UniformMat4 _projMat;

  /// Checks for the shader in the shader cache in the given [state],
  /// if it is not found then this shader is compiled and added
  /// to the shader cache before being returned.
  factory Texture2DDirectional.cached(Core.RenderState state) {
    Texture2DDirectional shader = state.shader(defaultName);
    if (shader == null) {
      shader = new Texture2DDirectional(state.gl);
      state.addShader(shader);
    }
    return shader;
  }

  /// Compiles this shader for the given rendering context.
  Texture2DDirectional(WebGL.RenderingContext gl): super(gl, defaultName) {
    this.initialize(_vertexSource, _fragmentSource);
    this._posAttr     = this.attributes["posAttr"];
    this._normAttr    = this.attributes["normAttr"];
    this._txtAttr     = this.attributes["txtAttr"];
    this._lightVec    = this.uniforms["lightVec"] as Uniform3f;
    this._lightClr    = this.uniforms["lightClr"] as Uniform3f;
    this._emissionTxt = this.uniforms["emissionTxt"] as UniformSampler2D;
    this._ambientTxt  = this.uniforms["ambientTxt"] as UniformSampler2D;
    this._diffuseTxt  = this.uniforms["diffuseTxt"] as UniformSampler2D;
    this._specularTxt = this.uniforms["specularTxt"] as UniformSampler2D;
    this._hasEmission = this.uniforms["hasEmission"] as Uniform1i;
    this._hasAmbient  = this.uniforms["hasAmbient"] as Uniform1i;
    this._hasDiffuse  = this.uniforms["hasDiffuse"] as Uniform1i;
    this._hasSpecular = this.uniforms["hasSpecular"] as Uniform1i;
    this._shininess   = this.uniforms["shininess"] as Uniform1f;
    this._objMat      = this.uniforms["objMat"] as UniformMat4;
    this._viewMat     = this.uniforms["viewMat"] as UniformMat4;
    this._projMat     = this.uniforms["projMat"] as UniformMat4;
  }

  /// The position vertex shader attribute.
  Attribute get posAttr => this._posAttr;

  /// The normal vertex shader attribute.
  Attribute get normAttr => this._normAttr;

  /// The texture vertex shader attribute.
  Attribute get txtAttr => this._txtAttr;

  /// The direction the light is pointing.
  Math.Vector3 get lightVector => this._lightVec.getVector3();
  set lightVector(Math.Vector3 vec) => this._lightVec.setVector3(vec);

  /// The color of the light.
  Math.Color3 get lightColor => this._lightClr.getColor3();
  set lightColor(Math.Color3 clr) => this._lightClr.setColor3(clr);

  /// Sets the directional light's vector and color.
  void setLight(Lights.Directional light) {
    this.lightVector = light.direction;
    this.lightColor = light.color;
  }

  /// Sets the texture sampler uniforms.
  void _setTex(Textures.Texture2D txt, UniformSampler2D txtSamp, Uniform1i hasTxt) {
    if (txt == null) {
      txtSamp.setIndex(0);
      hasTxt.setValue(0);
    } else {
      txtSamp.setTexture2D(txt);
      hasTxt.setValue(1);
    }
  }

  /// The emission texture of the object.
  set emissionTexture(Textures.Texture2D txt) =>
    this._setTex(txt, this._emissionTxt, this._hasEmission);

  /// The ambient texture of the object.
  set ambientTexture(Textures.Texture2D txt) =>
    this._setTex(txt, this._ambientTxt, this._hasAmbient);

  /// The diffuse texture of the object.
  set diffuseTexture(Textures.Texture2D txt) =>
    this._setTex(txt, this._diffuseTxt, this._hasDiffuse);

  /// The specular texture of the object.
  set specularTexture(Textures.Texture2D txt) =>
    this._setTex(txt, this._specularTxt, this._hasSpecular);

  /// The shininess value of the specualr.
  double get shininess => this._shininess.getValue();
  set shininess(double value) => this._shininess.setValue(value);

  /// Sets the material's colors.
  void setMaterial(Materials.Texture2D material) {
    this.emissionTexture = material.emission;
    this.ambientTexture = material.ambient;
    this.diffuseTexture = material.diffuse;
    this.specularTexture = material.specular;
    this.shininess = material.shininess;
  }

  /// The object matrix.
  Math.Matrix4 get objectMatrix => this._objMat.getMatrix4();
  set objectMatrix(Math.Matrix4 mat) => this._objMat.setMatrix4(mat);

  /// The view matrix.
  Math.Matrix4 get viewMatrix => this._viewMat.getMatrix4();
  set viewMatrix(Math.Matrix4 mat) => this._viewMat.setMatrix4(mat);

  /// The projection matrix.
  Math.Matrix4 get projectMatrix => this._projMat.getMatrix4();
  set projectMatrix(Math.Matrix4 mat) => this._projMat.setMatrix4(mat);
}