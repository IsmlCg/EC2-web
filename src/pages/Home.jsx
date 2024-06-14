import Card from "../components/UI/Card";
import CardContent from "../components/UI/CardsContent";
import Title from "../components/UI/Title";
import Layout from "../components/common/Layout";
import page from "../assets/images/page.png";
import page1 from "../assets/images/page1.png";
function Home() {
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
          title="Demo"
          subTitle="Subtitle"
          page={page1}
          col="lg:col-span-5"
          color="bg-fuchsia-200"
        />
        <Card
          title="Demo"
          subTitle="Subtitle"
          page={page}
          col="lg:col-span-7"
          color="bg-teal-100"
        />
        <Card
          title="Demo"
          subTitle="Subtitle"
          page={page1}
          col="lg:col-span-7"
          color="bg-orange-200"
        />
        <Card
          title="Demo"
          subTitle="Subtitle"
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
          title="Doodler"
          subTitle="Multiplayer"
          page={page1}
          col="lg:col-span-7"
          color="bg-white"
        />
        <Card
          textColor="text-white"
          title="Demo"
          subTitle="Subtitle"
          page={page}
          col="lg:col-span-5"
          color="bg-black"
        />
      </CardContent>
    </Layout>
  );
}

export default Home;
