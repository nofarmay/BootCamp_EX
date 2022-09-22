const darkLight = (enteredColor) => {
    const color = enteredColor.toLowerCase();
    switch (true) {
      case color === "yellow" || color === "pink" || color === "orange":
        return "light color";
      case color === "blue" || color === "purple" || color === "brown":
        return "dark color";
      default:
        return "Unknown color";
    }
  };