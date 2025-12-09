import ExperienceTag from "./experienceTag";
import { experience } from "../../lib/experienceData";

export default function ExperienceList() {
  return experience.map((exp) => (
    <div key={exp.id}>
      <ExperienceTag years={exp.years} name={exp.name} />
    </div>
  ));
}
