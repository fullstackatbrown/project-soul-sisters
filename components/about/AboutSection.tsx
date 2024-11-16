const AboutSection = () => {
    return (
        <div className="bg-black text-white min-h-screen w-full flex flex-col items-center p-10 space-y-10">
            {/* About Section */}
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <section className="flex flex-col md:flex-row items-start md:space-x-10 bg-neutral-800 p-6 rounded-lg shadow-md">
                <div className="w-full md:w-3/5">
                    <p className="text-gray-200 leading-relaxed">
                        This is stuff about the movie. What it is, who’s making it. You
                        should get involved with this! It’s a great project and so many
                        people are already involved. Come be a part of this great community
                        and those that are working on it. This is everything you need to
                        know about the movie right now! More things will be added to the
                        news page, like things that are new and other stuff.
                    </p>
                </div>
                <div className="w-full md:w-2/5 mt-6 md:mt-0">
                    <img src="PLACEHOLDER" alt="film-picture" className="object-cover w-full h-full rounded-lg shadow-lg"/>
                </div>
            </section>
            {/* Production Section */}
            <h2 className="text-2xl font-bold mb-8">Production Team</h2>
            <section className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-neutral-800 p-4 rounded-lg text-center">
                        <h3 className="text-lg font-semibold">Director</h3>
                        <p className="text-gray-400">Name</p>
                    </div>
                </div>
            </section>
        </div>

        
        // <div className="max-w-screen-lg min-h-screen bg-black flex justify-center text-white">
        //    <div className="max-w-full flex p-8 space-x-4">
        //        <div className="w-3/5 pr-4">
        //            <p className="leading-relaxed">About Us</p>
        //         </div>
        //         <div className="w-2/5 pl-4">
        //             {/** Need to add photos */}
        //             <img src="ADD SRC FILE" alt="film-picture" className="object-cover w-full h-full"/>
        //         </div>
        //     </div>
        // </div>
    );
}

export default AboutSection;