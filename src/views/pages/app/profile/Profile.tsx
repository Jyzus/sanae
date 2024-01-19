export const Profile = () => {
  return (
    <div className="w-full min-h-screen bg-sky-50">
      <div
        className="w-full h-48 mx-auto"
        style={{
          background:
            'url("https://png.pngtree.com/thumb_back/fw800/back_our/20190625/ourmid/pngtree-medical-health-and-safety-simple-blue-banner-image_260843.jpg")',
        }}
      ></div>
      <div className="w-[98%] mx-auto rounded-lg relative bg-white p-8">
        {/* <img
          src={photoURL ? photoURL : "/img/noUser.jpg"}
          className="absolute rounded-full w-24 h-24 -top-12 left-1/2 -translate-x-1/2"
        />
        <div className="pt-8">
          <p className="text-center font-semibold text-2xl">{displayName}</p>
          <p className="text-center font-semibold">{email}</p>
        </div> */}
        <div className="container mx-auto mt-8 grid grid-cols-3 content-center text-center">
          <div>
            <p className="text-2xl font-black">21</p>
            <span className="font-semibold">Temas repasados</span>
          </div>
          <div>
            <p className="text-2xl font-black">12</p>
            <span className="font-semibold">Exámenes resueltos</span>
          </div>
          <div>
            <p className="text-2xl font-black">4</p>
            <span className="font-semibold">Aportes a la comunidad</span>
          </div>
        </div>
      </div>
    </div>
  );
};
