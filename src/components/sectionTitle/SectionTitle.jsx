const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 mx-auto text-center my-8">
      <h3 className="text-yellow-600">--- {subHeading} ---</h3>
      <p className="text-3xl uppercase border-y-4 py-4">{heading}</p>
    </div>
  );
};

export default SectionTitle;
