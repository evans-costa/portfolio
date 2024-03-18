import ExperienceTag from "./experienceTag";
import { experience } from "../../lib/experience-data";

export default function ExperienceList() {
  return experience.map((experience) => (
    <div key={experience.id}>
      <ExperienceTag years={experience.years} name={experience.name} />
    </div>
  ));
}
