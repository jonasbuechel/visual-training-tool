class Color {
  static darkBaseColor = 85;
  static brightBaseColor = 170;

  static getPrimary(intensity, scheme) {
    if (scheme === "dark") {
      return `rgba(${this.darkBaseColor},${this.darkBaseColor},${intensity},1)`;
    }

    if (scheme === "bright") {
      const yellowValue = this.brightBaseColor - intensity;
      return `rgba(${this.brightBaseColor},${this.brightBaseColor},${yellowValue},1)`;
    }
  }

  static getSecondary(intensity, scheme) {
    if (scheme === "dark") {
      return `rgba(${intensity},${this.darkBaseColor},${this.darkBaseColor},1)`;
    }

    if (scheme === "bright") {
      const redValue = this.brightBaseColor - intensity;
      return `rgba(${redValue},${this.brightBaseColor},${this.brightBaseColor},1)`;
    }
  }
}

export default Color;
