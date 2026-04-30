const Name = "Qadir";
switch (Name) {
  case "Qadir":
    console.log("Hi");
    break;
  case "Shahram":
    console.log("Hey");
    break;
  default:
    console.log("Hoy");
    break;
} //Hi

Name === "Qadir"
  ? console.log("Hi")
  : Name === "Shahram"
    ? console.log("Hey")
    : console.log("Hoy"); //Hi
