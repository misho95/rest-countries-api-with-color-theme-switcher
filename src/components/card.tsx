const Card = ({ img, name, population, region, capital }) => {
  return (
    <article className="w-[264px] h-[336px] rounded-lg overflow-hidden bg-white dark:bg-[#2B3844] text-black dark:text-white shadow-sm shadow-black/10">
      <img src={img} alt={name} loading="lazy" />
      <div role="container-for-padding" className="p-[20px]">
        <h1 className="font-NunitoSansExtraBold text-[18px]">{name}</h1>
        <p className="text-[14px]">
          <span className="font-NunitoSansSemiBold">Population:</span>
          <span className="font-NunitoSansRegular">{population}</span>
        </p>
        <p>
          <span>Region:</span>
          <span>{region}</span>
        </p>
        <p>
          <span>Capital:</span>
          <span>{capital}</span>
        </p>
      </div>
    </article>
  );
};

export default Card;
