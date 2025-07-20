import TypeWriter from "typewriter-effect";

const Type = () => {
    return (
        <TypeWriter 
            options = {{
                strings: [
                    "Software Developer",
                    "Freelancer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
};

export default Type;