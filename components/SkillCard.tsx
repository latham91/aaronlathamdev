import Image from "next/image";

export default function SkillCard({
  name,
  icon,
}: {
  name: string;
  icon: string;
}) {
  return (
    <div className="flex items-center justify-center flex-col p-4 rounded-xl">
      <Image
        src={icon}
        alt={`${name} Icon`}
        draggable="false"
        width={100}
        height={100}
      />
      <h3 className="text-foreground mt-4 rounded-md">{name}</h3>
    </div>
  );
}
