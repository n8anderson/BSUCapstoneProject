const headInfo = {
    0: {
      info: 'Small Eyes',
      pros: 'Better at seeing in the dark\nHelps prevent glare during the day',
      cons: 'Not a full range of visions',
      habitatScores: {
        arctic: 3,
        swamp: 3,
        ocean: 3,
        mountain: 3,
        'deciduous-forest': 1,
        savannah: 2,
        cave: 2,
        desert: 3,
        rainforest: 3,
        grassland: 2
      }
    },
    1: {
      info: 'No Eyes',
      pros: 'Other senses such as hearing enhances',
      cons: 'Can’t see predators',
      habitatScores: {
        arctic: 0,
        swamp: 0,
        ocean: 1,
        mountain: 0,
        'deciduous-forest': 0,
        savannah: 0,
        cave: 2,
        desert: 0,
        rainforest: 0,
        grassland: 0
      }
    },
    2: {
      info: 'Big Eyes',
      pros: 'Improves range of vision',
      cons: 'Can suffer short sight',
      habitatScores: {
        arctic: 2,
        swamp: 0,
        ocean: 1,
        mountain: 3,
        'deciduous-forest': 3,
        savannah: 3,
        cave: 0,
        desert: 1,
        rainforest: 1,
        grassland: 3
      }
    }
}

const mouthInfo = {
  0: {
    info: 'Beak',
    pros: 'Can eat hard nuts/items and cactus\nGood at Feeding young\nGood at Defending',
    cons: 'Cannot chew larger pieces of food',
    habitatScores: {
      arctic: 2,
      swamp: 2,
      ocean: 0,
      mountain: 2,
      'deciduous-forest': 2,
      savannah: 2,
      cave: 0,
      desert: 2,
      rainforest: 2,
      grassland: 2
    }
  },
  1: {
    info: 'Baline Mouth',
    pros: 'Allows filtering out water while keeping the prey in the mouth',
    cons: 'Not able to get big prey\nCan not rip or grind',
    habitatScores: {
      arctic: 0,
      swamp: 0,
      ocean: 3,
      mountain: 0,
      'deciduous-forest': 0,
      savannah: 0,
      cave: 0,
      desert: 0,
      rainforest: 0,
      grassland: 0
    }
  },
  2: {
    info: 'Sharp Teeth',
    pros: 'Can shred the meat off of their prey\nDefending',
    cons: 'Cannot get food in small places',
    habitatScores: {
      arctic: 3,
      swamp: 3,
      ocean: 3,
      mountain: 3,
      'deciduous-forest': 3,
      savannah: 3,
      cave: 2,
      desert: 3,
      rainforest: 3,
      grassland: 2
    },
  },
  3: {
    info: 'Long Tongue',
    pros: 'Can get insects in tight places',
    cons: 'Can not properly defend itself',
    habitatScores: {
      arctic: 0,
      swamp: 0,
      ocean: 0,
      mountain: 0,
      'deciduous-forest': 0,
      savannah: 0,
      cave: 0,
      desert: 3,
      rainforest: 3,
      grassland: 3
    }
  }
}

const earInfo = {
  0: {
    info: 'Big/Cupped Ears',
    pros: 'Can keep the organisms cool\nCan capture sound easier',
    cons: 'Does not hold in heat',
    habitatScores: {
      arctic: 3,
      swamp: 0,
      ocean: 0,
      mountain: 3,
      'deciduous-forest': 3,
      savannah: 2,
      cave: 2,
      desert: 3,
      rainforest: 1,
      grassland: 1
    }
  },
  1: {
    info: 'Small Ears',
    pros: 'Prevents heat loss',
    cons: 'Can not capture in a lot of sound',
    habitatScores: {
      arctic: 2,
      swamp: 1,
      ocean: 0,
      mountain: 2,
      'deciduous-forest': 1,
      savannah: 1,
      cave: 1,
      desert: 2,
      rainforest: 3,
      grassland: 3
    }
  },
  2: {
    info: 'No Ears',
    pros: 'Heightened other senses\nCan sense vibrations\nReduces drag while swimming',
    cons: 'Hearing is reduced',
    habitatScores: {
      arctic: 0,
      swamp: 3,
      ocean: 3,
      mountain: 0,
      'deciduous-forest': 0,
      savannah: 0,
      cave: 3,
      desert: 2,
      rainforest: 0,
      grassland: 1
    },
  }
}

const bodyInfo = {
  0: {
    info: 'Bare body',
    pros: 'Speed\nPrevents overheating ',
    cons: 'No heat trapped\nNo sun protection',
    habitatScores: {
      arctic: 0,
      swamp: 3,
      ocean: 3,
      mountain: 0,
      'deciduous-forest': 0,
      savannah: 1,
      cave: 3,
      desert: 3,
      rainforest: 3,
      grassland: 0
    }
  },
  1: {
    info: 'Hairy body',
    pros: 'Regulates body temperature\nWaterproof\nDefense',
    cons: 'Heavy material\nSlows down movement in water',
    habitatScores: {
      arctic: 3,
      swamp: 0,
      ocean: 0,
      mountain: 3,
      'deciduous-forest': 3,
      savannah: 2,
      cave: 1,
      desert: 2,
      rainforest: 2,
      grassland: 3
    }
  },
  2: {
    info: 'Feather body',
    pros: 'Regulate body temperature\nCamouflage\nLight material',
    cons: 'Needs management',
    habitatScores: {
      arctic: 1,
      swamp: 1,
      ocean: 0,
      mountain: 2,
      'deciduous-forest': 2,
      savannah: 2,
      cave: 0,
      desert: 2,
      rainforest: 2,
      grassland: 1
    }
  },
  3: {
    info: 'Scale body',
    pros: 'Water resistant\nMakes animal streamlines',
    cons: 'Does not hold in heat',
    habitatScores: {
      arctic: 0,
      swamp: 3,
      ocean: 3,
      mountain: 0,
      'deciduous-forest': 0,
      savannah: 0,
      cave: 2,
      desert: 3,
      rainforest: 3,
      grassland: 1
    }
  },
}

const legInfo = {
  0: {
    info: 'Webbed legs',
    pros: 'Swim faster',
    cons: 'Slow running',
    habitatScores: {
      arctic: 2,
      swamp: 3,
      ocean: 3,
      mountain: 0,
      'deciduous-forest': 0,
      savannah: 0,
      cave: 1,
      desert: 0,
      rainforest: 0,
      grassland: 0
    }
  },
  // TODO: This does not mean angle hands
  1: {
    info: 'Tapered legs',
    pros: 'Gripping food\nClimbing trees',
    cons: 'Limited digging\nLimited hunting',
    habitatScores: {
      arctic: 0,
      swamp: 0,
      ocean: 1,
      mountain: 2,
      'deciduous-forest': 1,
      savannah: 2,
      cave: 0,
      desert: 2,
      rainforest: 2,
      grassland: 0
    }
  },
  2: {
    info: 'Claw legs',
    pros: 'Better Hunting\nBetter Climbing',
    cons: 'Can’t hold materials\nNot strong swimmers',
    habitatScores: {
      arctic: 3,
      swamp: 2,
      ocean: 1,
      mountain: 3,
      'deciduous-forest': 3,
      savannah: 3,
      cave: 2,
      desert: 3,
      rainforest: 2,
      grassland: 2
    }
  },
  3: {
    info: 'Nailed legs',
    pros: 'Better Digging\nBetter Hunting',
    cons: 'No Climbing',
    habitatScores: {
      arctic: 3,
      swamp: 2,
      ocean: 1,
      mountain: 2,
      'deciduous-forest': 2,
      savannah: 2,
      cave: 2,
      desert: 3,
      rainforest: 3,
      grassland: 2
    }
  },
  4: {
    info: 'Paddle legs',
    pros: 'Strong swimmers',
    cons: 'Limited hunting\nNo climbing\nNo digging',
    habitatScores: {
      arctic: 1,
      swamp: 3,
      ocean: 3,
      mountain: 0,
      'deciduous-forest': 0,
      savannah: 0,
      cave: 0,
      desert: 0,
      rainforest: 0,
      grassland: 0
    }
  }
}

const habitatInfo = {
  arctic: {
    name: 'Tundra',
    bodyText: 'A tundra is a habitat that has very low temperatures, unlike the antarctica flora can grow however there is a very short growing season. There are no trees that grow in the tundra habitat, but bushes that are low to the ground are able to grow and produce berries such as Blueberries, and Lowbush Cranberry. Animals that live here are adapted to be able to handle the harsh cold and low abundance of food.',
    citation: 'https://www.nps.gov/lacl/learn/nature/tundra.htm',
    commonCharacters: 'Thick Fur,Claws,Camouflage',
    commonAnimals: [
      {
        src: 'chameleon.png',
        name: 'Chameleon'
      },
      {
        src: 'monkey.png',
        name: 'Spider Monkey'
      },
    ]
  },
  desert: {
    name: 'Desert',
    bodyText: 'Making up over 20% of Earth’s land mass, deserts are known for their hot temperatures and lack of moisture, in fact the entire region of drylands is always under a constant deficit of moisture. On average the temperatures hit a little over 38 degrees celsius (100 degrees in Fahrenheit), and can get as cold as -3.9 degrees celsius (25 degrees fahrenheit). With almost as little as 10 inches of rain a year not many plants can grow, meaning that the plants that do grow are specialized for keeping water inside to stay hydrated. An example of this is cacti. cactus have a thick waxy outside to ensure that water is not lost during the day and can regulate temperature at night. The well known spines of the cactus not just help protect the plants from predators, they also help create a little bit of shade to protect the plant from the sun.\n'
    + 'Animals in the desert are also specialized for their location, many of the animals do not have a thick layer of fur to prevent overheating, most animals are bare or nude to ensure that they do not overcome heat stroke. Some animals also have adaptations to converse water, for example camels store water in their humps to keep hydrated. Animals also have a common characteristic of either having big or no ears, by having no ears then it conserves the amount of energy the organism needs to stay alive, and big ears help improve blood flow to help keep the animals cooler.',
    citation: 'https://earthobservatory.nasa.gov/biome/biodesert.php',
    commonCharacters: 'Hair,No Fur,Big or No Ears,Big or Small Eyes'
  },
  rainforest: {
    name: 'Tropical Rainforest',
    bodyText: 'The biome that gains the most rainfall in a year is the rainforest. The rainforest can reach a high of over 300 inches of rain a year. Mixed with the rain is a constant warm temperature averaging 25 degrees Celsius, which causes the environment to have high humidity. The animals and plants here have to be well-specialized to handle the high level of precipitation. The fauna in the rainforest work in levels; the lop layers there will be a tree canopy that towers over the bottom of the forest where dead materials are collected and deposed thanks to the warm temperatures and the diversity of microorganisms. Since the tree canopy covers the sky, there is not a lot of sunlight that hits the bottom floor, meaning not a lot of plants grow there.\n' 
    + 'The Tropical rainforest is home to almost half of the world\'s flora and fauna. Many of the organisms that live there are adapted to be able to survive in this habitat. One big adaptation is for the spider monkey; since there is an abundance of trees in the habitat, these monkeys in order to avoid competition live in the trees so their tails are able to grab and hold onto tree branches. Camouflage is also important as many species compete for resources and the predation levels are high. An example of camouflage is chameleons that blend into their surroundings to avoid getting eaten.',
    citation: 'https://earthobservatory.nasa.gov/biome/biorainforest.php',
    commonCharacters: 'Tails,Camouflage,Claws,Small Ears,Small or Big Eyes',
    commonAnimals: [
      {
        src: 'chameleon.png',
        name: 'Chameleon'
      },
      {
        src: 'monkey.png',
        name: 'Spider Monkey'
      }
    ]
  },
  ocean: {
    name: 'Ocean',
    bodyText: 'One of the biggest habitats in the world is the ocean as it makes up 71% of the planet. In the ocean there are seven unique ecosystems that take place in ocean water that have unique characteristics that can affect the animals and plants that live in the area. The seven ecosystems are Intertidal, Mudflat, Mangroves, Estuaries, Kelp Forest, Seagrass Meadows, Coral Reefs, Oyster Reefs, Open Ocean, Tidewater Glaciers, and Salt Marshes. In this simulation we will only be focusing on one ecosystem which is the open ocean also known as the pelagic zone.\n'
    + 'The pelagic zone is an area of vast openness. Many species here are open to many different factors such as prey and weather. Since the habitat is open there are no areas to hide from predators who are on the hunt. Weather is also a factor there is nothing shielding the animals of wind and wave activities which can influence water temperatures and pressure. The open ocean is divided into five different zones which vary in depth with many different species living in each zone. The epipelagic zone is considered the surface of the ocean to 200 meters down. Many mammals that depend on oxygen like whales and dolphins live here so they are able to breathe. The Mesopelagic zone is 200 meters to 1,00 meters deep, the light coming from the surface is becoming darker and many species depend on night vision to see such as squid. The last zone we will be focusing on is the Bathypelagic zone which is also referred to as the “Midnight Zone” as no light is seen, many organisms here have to depend on bioluminescence in order to capture prey, an example of this type of species in an anglerfish.',
    citation: 'https://www.nps.gov/subjects/oceans/open-ocean.htm',
    commonCharacters: 'Fins,Gills,No External Ears,Tails'
  },
  cave: {
    name: 'Cave',
    bodyText: 'Found all over the world, caves are one of the most unique biomes that can be explored. Caves are found under the settlement and can be aquatic and terrestrial and can have many walks of life. Since there is a lack of light many of the organisms need to have been adapted for the poor visibility. Many animals have smaller or no eyes in order to conserve energy and apply it to different and more useful senses, for example big ears is a common adaptation as many of the animals in caves communicate through echolocation. Bigger ears will allow the organism to trap in more sound to find their prey in the dark. Prey such as insects will hide under rocks.',
    citation: 'https://www.hbsd.hr/cave-habitats/?lang=en#:~:text=Terrestrial%20habitats%20in%20caves%20are,and%20on%20the%20organic%20matter.',
    commonCharacters: 'No or Small Eyes,Hair,Wings'
  },
  mountain: {
    name: 'Mountain',
    bodyText: 'Accounting for 25 percent of the total landmass on Earth, Mountains provide multiple types of habitats for various species as result of ranging elevations. Mountains can create different habitats such as aquatic, river, woodland, and temperate forests. By creating different types of environment mountains are home to 85 percent of the world\'s birds, mammals, and amphibians. Organisms that live here have to be specialized for many different factors such as weather and  altitude. A mountain is higher than 1968 feet, as you go higher in the mountain the weather gets colder and the air will start to get thinner as the amount of oxygen decreases.',
    citation: 'https://www.nps.gov/subjects/mountains/animals-plants-and-habitats.htm',
    commonCharacters: 'Thick Fur or Hair,Claws or Hooves'
  },
  savannah: {
    name: 'Savanna',
    bodyText: 'Known as a transition biome, a Savanna is an inbetween of a desert and a forest. This biome have two different seasons called the dry season or the growing season. The dry season is considered the winter season not because of a significant temperature decrease, but the lack of precipitation. The growing season is considered the summer season once again not that the temperatures increase significantly, but because the amount of rainfall increases. During the growing season the trees grow leaves and the grasses will grow.\n'
    + 'With over half of Africa as a biome there are many animals that need to have adaptations in order to survive. Since the savanna does not consist of many trees many prey are left in the open needing to find ways to defend themselves. Camouflage is one way that many grazers protect themselves as they can blend into the scenery, speed is also another way that prey can protect itself as many of the predators found in the biome can move at rapid speeds. To help the grazers eat they will need to have flat teeth in order to grind down the grasses that they eat. The predators also need to have adaptations in order for them to survive. Many of them will eat meat so they will need to have sharp teeth and claws to kill their prey.',
    citation: 'https://askabiologist.asu.edu/explore/savanna',
    commonCharacters: 'Big Ears,Big Eyes,Camouflage,Sharp or Flat Teeth,Hooves'
  },
  'deciduous-forest': {
    name: 'Temperate Deciduous Forest',
    bodyText: 'Found in the midline latitudes with a ranging climate with temperatures from as low as negative 30 degree celsius to thirty degrees celsius. This biome experiences all four seasons (summer, fall, winter, and spring) meaning that there will be hot summers and then cold winters with snow. In between those two polar opposite seasons there are gradual seasons whether plants will grow and die. On average this habitat will gain between 30 to 59 inches of rain in a year.\n'
    + 'Organisms need to be able to adapt to these gradual season changes, trees for example will have a thick bark in order to protect them from the coldness, they will also have their leaves fall off in order to conserve energy. Animals need to be adapted as well, many animals will have thick fur coats to help them keep warm in the winter and will shed them in the summer to keep cool. Some animals will just avoid the cooler seasons and will fly to the south or will hibernate until the spring.',
    citation: 'https://earthobservatory.nasa.gov/biome/biotemperate.php',
    commonCharacters: 'Fur,Big Eyes,Big Ears,Claws'
  },
  swamp: {
    name: 'Swamp',
    bodyText: 'Found everywhere around the world, swamps are land that is either covered or saturated in water. Depending on the location of the swamp determines what type of water is present, if in a coastal region, salt water will be present, but if it is inland, there will be fresh water. For freshwater swamps, the water level fluctuates with the levels of rainfall. The organism in these habitats has to be able to flute with the increase and decrease of water levels. Some animals that can survive this constant change are frogs and alligators as they do not rely on much vegetation in their surroundings but can survive on other organisms that thrive living off of the water. Frogs and alligators also have an ability to live on land and in the water without limiting their resources. They have evolved mechanisms that can help them swim in the water and walk/hop on lands such as webbed feet and tails.',
    citation: 'https://education.nationalgeographic.org/resource/swamp/',
    commonCharacters: 'No Fur,No Ears,Small Eyes'
  },
  grassland: {
    name: 'Grassland',
    bodyText: 'Mainly located between forests and deserts, grasslands are flat fields of grass that have a wide range of temperature between -20 degrees celsius and 30 degree celsius. During the year this habitat can receive at least 30 inches of rain every year. The amount of rain determines the height of the grass in the fields as the more rain means great grass height. In the non growing season the grass will die down into the soil and seeds from the grass will then be spread for the next growing season. In this biome due to the little rainfall there are very few trees and barely any water sources.\n'
    + 'Animals found in that habitat are going to need to have adaptations in order to break down their diet of long grass. Some adaptation is going to be a digestive system that breaks down cellulose from the grasses and the animals will also need to have flatter teeth to grind down the grain. Since there are not many hiding places many animals will have paws with claws to help them dig and burrow themselves underground away from predators.',
    citation: 'https://earthobservatory.nasa.gov/biome/biograssland.php\nhttps://www.museum.state.il.us/muslink/prairie/htmls/eco_an_adapt.html#:~:text=Some%20animals%2C%20such%20as%20bison,they%20are%20protected%20from%20predators.',
    commonCharacters: 'Flat Teeth,Nails or Claws,Small Eyes,Small or No Ears'
  }
}

module.exports = { bodyInfo, headInfo, legInfo, habitatInfo, earInfo, mouthInfo}