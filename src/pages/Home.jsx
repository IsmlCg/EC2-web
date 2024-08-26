import Card from "../components/UI/Card";
import CardContent from "../components/UI/CardsContent";
import Title from "../components/UI/Title";
import Layout from "../components/common/Layout";
import page from "../assets/images/page.png";
import page1 from "../assets/images/page1.png";
import image from "../assets/images/image.png";
import premium from "../assets/images/horse-premium.png";
const Home = () => {
  return (
    <Layout>
      <Title
        title="Hi. I'm Ismael."
        subTitle="A software developer."
        detail="I'm passionate about developing software solutions that are engaging,
          accessible, and user-centric."
      />
      <CardContent>
        <Card
          link="/work"
          title="React"
          subTitle="crib nursing"
          page={page1}
          col="lg:col-span-5"
          color="bg-fuchsia-200"
        />
        <Card
          link="/work"
          title="Python"
          subTitle="AI-optimized patient scheduling system"
          page={page}
          col="lg:col-span-7"
          color="bg-teal-100"
        />
        <Card
          link="/work"
          title="Laravel"
          subTitle="HR Web System"
          page={page1}
          col="lg:col-span-7"
          color="bg-orange-200"
        />
        <Card
          link="/work"
          title="CodeIgniter"
          subTitle="Accounting Web System"
          page={page}
          col="lg:col-span-5"
          color="bg-sky-200"
        />
      </CardContent>
      <Title
        title="In Progress."
        detail="Design and develop side projects from the beginning to the end, including software development, design development, and other stages."
      />
      <CardContent>
        <Card
          title="React"
          subTitle="Horse and breeder"
          page={premium}
          col="lg:col-span-7"
          color="bg-white"
          link="/work"
        />
        <Card
          textColor="text-white"
          title="React"
          subTitle="Blog side"
          page={image}
          col="lg:col-span-5"
          color="bg-black"
          link="/work"
        />
      </CardContent>
    </Layout>
  );
};

export default Home;
