const Image = (prop) => {
  let { heroImage, className, id, alt } = prop;
  return <img src={heroImage} className={className} id={id} alt={alt} />;
};

export default Image;
