import AnimatedTitle from "../AnimatedTitle";

const EXPERIENCE_DATA=[
    {
        id: "kacoms",
        job: "カコムスSIT株式会社",
        period: "2025 10月- 在職中",
    }  
];

export default function Experience(){
    return (
    /* ▼ 修正: 同じく py-24 と max-w-5xl mx-auto で統一！ */
    <section id="experience" className="max-w-5xl mx-auto px-10 py-24 overflow-hidden">
      <AnimatedTitle title="Full Time Job Experience" />
      <table className="block mt-10">
        <tbody className="block">
          {EXPERIENCE_DATA.map((item) => (
            <tr key={item.id} className="block py-[15px] text-left text-xl">
              <th className="block font-bold">{item.job}</th>
              <td className="block">{item.period}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}