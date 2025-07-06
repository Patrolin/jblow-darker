#version 300 es
precision highp float;

uniform int u_color;
out vec4 out_color;
void main() {
  mat3 M2_inv = mat3(
    +1.0, +1.0, +1.0,
    +0.3963377774, -0.1055613458, -0.0894841775,
    +0.2158037573, -0.0638541728, -1.2914855480
  );
  out_color = M2_inv * u_color;
}
