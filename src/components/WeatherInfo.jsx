const WeatherInfo = ({ weather }) => {
  return (
    <div>
      <div>{weather?.location.name}</div>
      <div>{weather?.location.country}</div>
      <div>
        <img
          src={`http:${weather?.current.condition.icon}`}
          alt={weather?.current.condition.text}
          width="128"
        />
      </div>
      <div>
        <div>
          <div>{weather?.current.condition.text}</div>
          <div>{weather?.current.temp_c}</div>
        </div>
      </div>

      <iframe
        title="map"
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29370.719760167438!2d${weather?.location.lon}3!3d${weather?.location.lat}8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2scu!4v1704399780571!5m2!1ses!2scu`}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default WeatherInfo;
