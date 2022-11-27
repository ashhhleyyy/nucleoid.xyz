{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          system = system;
        };
      in
    {
      packages.default = pkgs.stdenv.mkDerivation rec {
        pname = "nucleoid-xyz";
        version = "devel";
        src = ./.;
        nativeBuildInputs = [ pkgs.zola ];
        buildPhase = "zola build";
        installPhase = "cp -r public $out";
      };
      devShell = pkgs.mkShell {
        packages = with pkgs; [
          zola
        ];
      };
    }
  );
}
