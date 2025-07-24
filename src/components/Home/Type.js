import TypeWriter from "typewriter-effect";

const Type = () => {
    return (
        <TypeWriter 
            options = {{
                strings: [
                    "Software Engineer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
};

export default Type;