const AboutSection = () => {
    return (
        <div className="bg-black text-white min-h-screen w-full flex flex-col items-center p-10 space-y-10">
            <div style={{ marginLeft: '10%', marginRight: '10%', marginTop: '10%'}}>
                <section className="bg-neutral-800 p-6 rounded-lg shadow-md flex flex-col md:flex-row">
                {/* Left Column */}
                    <div className="flex flex-col justify-start w-full md:w-3/5 space-y-4 mr-10 ml-10 mb-10 mt-10">
                        <h2 className="text-2xl font-bold text-center md:text-left mb-4">About Us</h2>
                        <p className="text-gray-200 leading-relaxed">
                            This is stuff about the movie. What it is, who’s making it. You
                            should get involved with this! It’s a great project and so many
                            people are already involved. Come be a part of this great community
                            and those that are working on it. This is everything you need to
                            know about the movie right now! More things will be added to the
                            news page, like things that are new and other stuff.
                        </p>
                    </div>
                    {/* Right Column */}
                    <div className="w-full md:w-2/5">
                        <img src="PLACEHOLDER" alt="film-picture" className="object-cover w-full h-full rounded-lg shadow-lg" style={{ height: '100%' }}/>
                    </div>
                </section>

                {/* Production Section */}
                <h2 className="text-2xl text-center font-bold mb-8 mt-8">Production Team</h2>
                <section className="w-full">
                    <div className="grid grid-cols-2 gap-6 pl-4">
                        <div className="bg-neutral-800 p-4 rounded-lg text-left">
                            <h3 className="text-lg font-semibold">Director</h3>
                            <p className="text-gray-400">Name</p>
                        </div>
                        <div className="bg-neutral-800 p-4 rounded-lg text-left">
                            <h3 className="text-lg font-semibold">Written by</h3>
                            <p className="text-gray-400">Name</p>
                        </div>
                        <div className="bg-neutral-800 p-4 rounded-lg text-left">
                            <h3 className="text-lg font-semibold">Starring</h3>
                            <p className="text-gray-400">Name</p>
                            <p className="text-gray-400">Name</p>
                            <p className="text-gray-400">Name</p>
                        </div>
                        <div className="bg-neutral-800 p-4 rounded-lg text-left">
                            <h3 className="text-lg font-semibold">Producer</h3>
                            <p className="text-gray-400">Name</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AboutSection;