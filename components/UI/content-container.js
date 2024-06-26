function ContentContainer({ children }) {
  return (
    <div className="absolute top-28 md:top-32 right-0 left-0 text-center lg:mx-24 lg:top-44">
      {children}
    </div>
  );
}

export default ContentContainer;
