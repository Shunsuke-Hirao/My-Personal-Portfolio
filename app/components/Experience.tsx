const EXPERIENCE_DATA=[
    {
        id: "kacoms",
        job: "カコムスSIT株式会社",
        period: "2025 10月- 在職中",
    }  
];

export default function Experience(){
    return (
    <section  className="px-36 mb-50 h-screen">
      <h2 className="text-center text-6xl my-15">Full Time Job Experience</h2>
      <table className="block">
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