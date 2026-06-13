import("lucide-react").then((icons) => {
  const keys = Object.keys(icons).filter((key) => {
    const lowerKey = key.toLowerCase();
    return lowerKey.includes("git") || lowerKey.includes("linked");
  });

  console.log(keys.join("\n"));
});
