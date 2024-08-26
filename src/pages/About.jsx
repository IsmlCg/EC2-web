import React from "react"; // Ensure this import is present in case you're not using React 17+
import Layout from "../components/common/Layout"; // Importing the Layout component
import Title from "../components/UI/Title"; // Importing the Title component
import photo from "../assets/images/pic.png";
import BodyContent from "../components/UI/BodyContent";
import TitleDescription from "../components/UI/TitleDescription";
import WorkExperince from "../components/UI/WorkExperince";
import NumberTitleDescription from "../components/UI/NumberTitleDescription";
const About = () => {
  return (
    <>
      <Layout>
        <Title title="I'm Ismael." />

        <BodyContent>
          <div className=" col-span-4">
            <img
              className="rounded-full h-auto max-w-xs transition-all duration-300 rounded-b-lg cursor-pointer filter grayscale hover:grayscale-0"
              src={photo}
              alt="Your Company"
            />
          </div>
          <TitleDescription
            colSpan="col-span-8"
            title="I'm a Software Developer working remotely from 18°C Dublin, Ireland."
            description={
              <>
                Over the past {years()} years, I've specialized in various areas
                of software development, including
                <span className="font-bold">
                  React, JavaScript, Node.js, PHP SQL, NoSql, AWS EC2, and REST
                  APIs
                </span>
                . I've had the opportunity to build scalable applications and
                work on both front-end and back-end projects.
              </>
            }
            description2={
              <>
                These days, I focus on leading development at
                <span className="font-bold"> Web Side Horse and Breeder</span>,
                a premium platform that provides comprehensive reports, manages
                a database of horse family trees through an API, and facilitates
                horse sales."
              </>
            }
          />

          <WorkExperince
            job="Web Developer"
            company="Horse and Breeder"
            years="22~"
            colStart="col-start-9"
            colEnd="col-end-12"
          />
          <WorkExperince
            job="Web Developer"
            company="Globalnexo"
            years="19-22"
            colStart="col-start-7"
            colEnd="col-end-10"
          />
          <WorkExperince
            job="Full Stack Engineer"
            company="Globalnexo"
            years="16-19"
            colStart="col-start-4"
            colEnd="col-end-8"
          />
          <WorkExperince
            job="Software Developer"
            company="Institute of Statistics"
            years="14-16"
            colSpan="col-span-4"
          />
          <TitleDescription
            title="Let's work together if you're passionate about sustainability, education, equality, or carbon neutrality."
            description="I am a firm believer that we should leave this Earth in better shape than we found it, and my goal is to contribute to these ideals in whatever way I am able. If you share my beliefs, I would be delighted to speak with you."
          />
        </BodyContent>
        <BodyContent bgColor="bg-orange-100" rounded="rounded-custom-4-5rem">
          <NumberTitleDescription
            number="01"
            title="Build it"
            colSpan="col-span-6 pt-10"
            description="I write code and build prototypes. Development tools and design prototypes are just the starting point; the real value comes from developing solutions teams can test, iterate, and improve. Developers can use direct browser code to improve features early on."
          />
          <NumberTitleDescription
            number="02"
            title="Collaborate"
            colSpan="col-span-6 pt-10"
            description="Good software isn't built in isolation. Collaboration and feedback are essential to the development process. I work closely with stakeholders and team members, welcoming feedback to refine ideas and deliver robust, scalable solutions that meet business and user needs."
          />
          <NumberTitleDescription
            number="03"
            title="Accessible by Design"
            colSpan="col-span-6 pt-10"
            description="I make sure all the software I produce is accessible for all. Being inclusive in software isn't merely a feature; it's a necessity By adhering to best practices and standards, I ensure that my code can be used by anyone."
          />
          <NumberTitleDescription
            number="04"
            title="Keep Experimenting"
            colSpan="col-span-6 pb-20 pt-10"
            description="Developing is a field that is always evolving. One of the keys to improving is trying new approaches, learning from mistakes, and conducting continuous experiments. The results of some experiments will not be as good as the results of others, but even failures will provide valuable insight."
          />
        </BodyContent>
        <BodyContent>
          <TitleDescription
            description={
              <>
                Before I got into software development full-time, I started out
                as a web developer. One of my first jobs was coding complex
                <span className="font-bold">
                  object-oriented programming (OOP) designs in Java, HTML,
                  JavaScript, and CSS
                </span>
                , back when cross-browser compatibility was a daily struggle.
                Making sure every bit of code rendered correctly in different
                environments taught me the value of clean, adaptable code skills
                I’ve continued to hone over the years.
              </>
            }
            description2={
              <>
                Developing solid apps has always involved more than just coding;
                it’s about solving problems and staying curious. My side
                projects give me the opportunity to explore new technologies,
                experiment with different frameworks, and stay up to date with
                the ever-evolving web landscape.
                <br></br>
                <br />
                Outside of work, I enjoy finding the best cafes near the coast,
                diving into new music (both playing and listening to it),
                exploring new places with my partner, and hanging out with my
                Labrottie pup, Louie.
              </>
            }
          />
        </BodyContent>
      </Layout>
    </>
  );
};
function years() {
  const date1 = new Date("2014-01-01");
  const date2 = new Date();

  const yearDifference = date2.getFullYear() - date1.getFullYear();
  return yearDifference;
}
export default About;
