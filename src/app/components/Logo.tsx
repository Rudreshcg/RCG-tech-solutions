import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src={require("../../assets/images/logo_black.png")}
      alt="RCG Tech Solutions Logo"
      width={140}
      height={40}
      style={{ height: "40px", width: "auto" }}
      priority
    />
  );
} 