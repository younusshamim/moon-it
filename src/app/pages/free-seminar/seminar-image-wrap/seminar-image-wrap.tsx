import Image from "next/image";

const SeminarImageWrap = () => {
    return (
        <div className="w-2/5">
            <Image
                className="w-full h-[400px] object-cover object-center"
                sizes="100vw"
                width={0}
                height={0}
                src="/illustration/seminar.jpg"
                alt="Moon IT Seminar"
            />
        </div>
    );
};

export default SeminarImageWrap;