interface PropsType {
  img: string;
  name: string;
  population: number;
  region: string;
  capital: string | undefined;
}

const Card = ({ img, name, population, region, capital }: PropsType) => {
  return (
    <article className="w-[264px] h-[336px] rounded-lg overflow-hidden bg-white dark:bg-[#2B3844] text-black dark:text-white shadow-sm shadow-black/10">
      <img src={img} alt={name} loading="lazy" />
      <div role="container-for-padding" className="p-[20px]">
        <h1 className="font-NunitoSansExtraBold text-[18px]">{name}</h1>
        <p className="text-[14px] flex gap-[3px]">
          <span className="font-NunitoSansSemiBold">Population:</span>
          <span className="font-NunitoSansLight">{population}</span>
        </p>
        <p className="text-[14px] flex gap-[3px]">
          <span className="font-NunitoSansSemiBold">Region:</span>
          <span className="font-NunitoSansLight">{region}</span>
        </p>
        <p className="text-[14px] flex gap-[3px]">
          <span className="font-NunitoSansSemiBold">Capital:</span>
          <span className="font-NunitoSansLight">{capital}</span>
        </p>
      </div>
    </article>
  );
};

export default Card;
