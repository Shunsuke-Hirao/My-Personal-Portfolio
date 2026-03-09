import AnimatedTitle from "../AnimatedTitle";
export default function About(){
    return(
        <section id="about" className="px-36 my-50 min-h-screen">
            <AnimatedTitle title="About Me" />
            <p className="leading-loose text-xl">
                初めまして！平尾俊介です！
                京都外国語大学 外国語学部を卒業後、カナダのGeorgian CollegeにてComputer Programmingを専攻し、2年間留学いたしました。
                卒業時期が4月であったため、2025年10月に秋新卒として入社し、現在はカコムスSIT株式会社に勤務しております。
            </p>
        </section>
    );
}