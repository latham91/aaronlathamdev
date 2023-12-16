export default function SkillCard({
  name,
  icon,
}: {
  name: string;
  icon: string;
}) {
  return (
    <div className="flex items-center justify-center flex-col gap-3">
      <img src={icon} alt={`${name} Icon`} />
      <h3 className="bg-foreground text-background px-5 py-2 rounded-md">
        {name}
      </h3>
    </div>
  );
}
