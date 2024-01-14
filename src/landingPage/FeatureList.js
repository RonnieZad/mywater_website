import { SpeakerWaveIcon, QrCodeIcon, CameraIcon, CurrencyDollarIcon, SparklesIcon } from '@heroicons/react/24/outline'

const cards = [
    {
        imageUrl: 'https://images.pexels.com/photos/6802628/pexels-photo-6802628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        text: 'Free, Clean Water for All',
        description: 'Access to clean water is a basic human right. That\'s why we\'re committed to providing free water to users across Uganda.',
        icon: <CurrencyDollarIcon className="w-10 h-10" />,
    },
    {
        imageUrl: 'https://ik.imagekit.io/ecjzuksxj/MyWater%2038.JPG?updatedAt=1703750458586',
        text: 'Ads with Purpose',
        description: 'Our Tetra Pak bottles feature advertisements from companies that share our commitment to a better world.',
        icon: <CameraIcon className="w-10 h-10" />,
    },
    {
        imageUrl: 'https://ik.imagekit.io/ecjzuksxj/Group%2036296.png?updatedAt=1703752236459',
        text: 'QR Code Rewards',
        description: 'Unlock a world of benefits by scanning QR codes on our bottles. We\'re partnered with companies to bring you exclusive rewards.',
        icon: <QrCodeIcon className="w-10 h-10" />,
    },
    {
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/mywater-abc.appspot.com/o/My%20(1).JPG?alt=media&token=373f166c-7e26-421c-87e0-cd5ef70c05e8',
        text: 'Eco-Friendly Tetra Pak',
        description: 'Our commitment to sustainability goes beyond water. Choose MyWater for our eco-friendly Tetra Pak bottles, reducing environmental impact and supporting a greener future.',
        icon: <SparklesIcon className="w-10 h-10" />,
    },
    {
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/mywater-abc.appspot.com/o/My.JPG?alt=media&token=fd4cfd3c-69bf-4017-b090-750a572d6abc',
        text: 'Community Impact',
        description: 'Contributing to a world where every sip of water creates a sustainable future.',
        icon: <SpeakerWaveIcon className="w-10 h-10" />,
    },
];

export default function FeatureList() {
    return (
        <section id="features">
            <div className="bg-white">
                <span class="ml-4 md:ml-32 mt-32 inline-flex items-center rounded-full bg-indigo-50 px-4 py-1 text-xl font-medium text-primary-blue ring-1 ring-inset ring-indigo-700/10">Features</span>
                <p class="text-5xl sm:text-4xl font-extrabold mt-8 mb-8 max-w-2xl px-4 md:px-32 text-black">
                    
                    Why Choose MyWater
                </p>
                <p class="text-lg mb-16 px-4 md:px-32 text-black">
                    See MyWater in action and learn more about our mission to provide free, clean water to all.
                </p>

                <div className="grid auto-rows-[692px] sm:auto-rows-[400px] md:auto-rows-[500px] lg:auto-rows-[600px] xl:auto-rows-[700px] grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-32">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 ${i === 3 || i === 6 ? "md:col-span-2" : "col-span-1"
                                }`}
                            style={{
                                backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`, // Replace with your grainy texture image URL
                                overflow: 'hidden',
                            }}
                        >

                            <div className="flex flex-row items-center ">
                                {card.icon}
                                <p className="text-xl ml-2 font-semibold">{card.text}</p>
                            </div>


                            <p className="text-lg mt-8  ">{card.description}</p>
                            <div className="relative mt-16">
                                <img
                                    src={card.imageUrl}
                                    alt={`Card ${i + 1}`}
                                    className="w-full h-full object-cover mb-4 rounded-xl transition-transform duration-300 transform hover:scale-105"
                                />
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
}



