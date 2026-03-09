import AnimatedTitle from "../AnimatedTitle";

const EDUCATION_DATA = [
  {
    id: "ashima-hs",
    school: "大阪府立芦間高等学校",
    period: "2016 4月 - 2019 3月",
  },
  {
    id: "kufs",
    school: "京都外国語大学外国語学部英米語学科",
    period: "2019 4月 - 2023 5月",
  },
  {
    id: "georgian-college",
    school: "Georgian College Computer Programming",
    period: "2023 5月 - 2025 7月",
  },
];

export default function Education() {
  return (
    <section  className="px-20 mb-50 min-h-screen overflow-hidden">
      <AnimatedTitle title="Education" />
      <table className="block">
        <tbody className="block">
          {EDUCATION_DATA.map((item) => (
            <tr key={item.id} className="block py-[15px] text-left text-xl">
              <th className="block font-bold">{item.school}</th>
              <td className="block">{item.period}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}