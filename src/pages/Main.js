import { SearchSection, CategorySection, AboutSection, ToursSection, TopDestSection, ReviewsSection, FormSection } from "../components/home";


const Main = () => {
  return (
    <main className="mt-[0.625rem]">
      <SearchSection/>
      <CategorySection/>
      <AboutSection/>
      <ToursSection/>
      <TopDestSection/>
      <ReviewsSection/>
      <FormSection/>
    </main>
  );
};

export default Main;
