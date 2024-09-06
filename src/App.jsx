import "./App.css";
import Comments from "./Comments";

const data = [
  {
    id: 1001,
    userName: "PixelPirate",
    text: "I love this new feature! Can't wait to try it out.",
    replyCount: 4,
    replies: [
      {
        id: 1012,
        userName: "CodeCrusader",
        text: "Agreed! It's going to change the game.",
        replyCount: 2,
        replies: [
          {
            id: 1023,
            userName: "ByteBandit",
            text: "I hope it doesn't come with the usual bugs though.",
            replyCount: 2,
            replies: [
              {
                id: 1034,
                userName: "DebugDiva",
                text:
                  "Bugs are like unexpected guests, they always show up!",
                replyCount: 1,
                replies: [
                  {
                    id: 1045,
                    userName: "BugBuster",
                    text: "Well, more bugs mean more work for us, right? 😂",
                  },
                ],
              },
              {
                id: 1056,
                userName: "CompileCaptain",
                text: "Better be prepared with some hotfixes right away!",
              },
            ],
          },
          {
            id: 1067,
            userName: "SyntaxSamurai",
            text: "I'm excited, but cautiously optimistic.",
            replyCount: 2,
            replies: [
              {
                id: 1078,
                userName: "NullNinja",
                text: "That's the spirit! Better safe than sorry.",
              },
              {
                id: 1089,
                userName: "TryCatchChampion",
                text: "Always have a fallback plan! 😉",
              },
            ],
          },
        ],
      },
      {
        id: 1090,
        userName: "GizmoGuru",
        text: "Does anyone know when it's officially launching?",
        replyCount: 1,
        replies: [
          {
            id: 1101,
            userName: "UpdateUnicorn",
            text: "Rumor has it, next week! 🦄",
            replyCount: 3,
            replies: [
              {
                id: 1112,
                userName: "PixelPirate",
                text: "Fingers crossed! 🤞",
              },
              {
                id: 1123,
                userName: "TechTornado",
                text: "Next week is going to be exciting then!",
                replyCount: 1,
                replies: [
                  {
                    id: 1134,
                    userName: "VersionViking",
                    text: "Hope they don't delay it again!",
                  },
                ],
              },
              {
                id: 1145,
                userName: "BetaBrave",
                text: "Anyone here signed up for the beta version?",
                replyCount: 1,
                replies: [
                  {
                    id: 1156,
                    userName: "BetaTesterBob",
                    text:
                      "Yep, already tested it! It's looking solid so far.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 1167,
        userName: "AppArchitect",
        text: "What do you think the impact on performance will be?",
        replyCount: 1,
        replies: [
          {
            id: 1178,
            userName: "LagLizard",
            text: "Probably some lag initially, but it'll get better.",
            replyCount: 2,
            replies: [
              {
                id: 1189,
                userName: "CodeCrusader",
                text: "I hope they optimize it well from the start.",
              },
              {
                id: 1200,
                userName: "CacheCowboy",
                text: "Caching will be crucial to avoid those lags.",
              },
            ],
          },
        ],
      },
      {
        id: 1211,
        userName: "FrameworkFanatic",
        text: "I wonder how this will compare with the older frameworks?",
        replyCount: 1,
        replies: [
          {
            id: 1222,
            userName: "LegacyLarry",
            text:
              "I'm still holding on to my old frameworks like a stubborn goat. 😄",
          },
        ],
      },
    ],
  },
  {
    id: 1233,
    userName: "NeonNinja",
    text: "Can we talk about how awesome this community is? 🚀",
    replyCount: 3,
    replies: [
      {
        id: 1244,
        userName: "QuantumQuokka",
        text: "Absolutely! It's the best place for tech enthusiasts.",
        replyCount: 1,
        replies: [
          {
            id: 1255,
            userName: "CosmicCoder",
            text: "Agreed! So many helpful folks around here.",
            replyCount: 1,
            replies: [
              {
                id: 1266,
                userName: "NovaNerd",
                text: "The best community is a kind community. 💖",
              },
            ],
          },
        ],
      },
      {
        id: 1277,
        userName: "TechTitan",
        text: "It's rare to find such positive vibes on the internet.",
        replyCount: 3,
        replies: [
          {
            id: 1288,
            userName: "NeonNinja",
            text: "Totally! Let's keep it this way. ✌️",
          },
          {
            id: 1299,
            userName: "ByteBandit",
            text: "Keep the trolls away and all is good. 😅",
            replyCount: 1,
            replies: [
              {
                id: 1300,
                userName: "QuantumQuokka",
                text: "The ultimate goal! 😂",
                replyCount: 1,
                replies: [
                  {
                    id: 1311,
                    userName: "ModeratorMaven",
                    text: "Our mods are the real MVPs!",
                  },
                ],
              },
            ],
          },
          {
            id: 1322,
            userName: "PixelPal",
            text: "Big props to everyone who keeps it friendly!",
          },
        ],
      },
      {
        id: 1333,
        userName: "HackerHawk",
        text: "We should organize more hackathons and coding challenges!",
      },
    ],
  },
  {
    id: 1344,
    userName: "CyberScribe",
    text:
      "Does anyone here use a dark theme while coding? I can't go back to light mode!",
    replyCount: 3,
    replies: [
      {
        id: 1355,
        userName: "DarkModeDemon",
        text: "Dark mode is life! 🌑",
        replyCount: 1,
        replies: [
          {
            id: 1366,
            userName: "LightModeLegend",
            text: "Team Light Mode here! I like my eyes burning. 😅",
          },
        ],
      },
      {
        id: 1377,
        userName: "NocturnalNerd",
        text: "Dark mode all the way. Saves battery too!",
        replyCount: 2,
        replies: [
          {
            id: 1388,
            userName: "CyberScribe",
            text: "And it's easier on the eyes. Double win! 👓",
          },
          {
            id: 1399,
            userName: "RetinaRanger",
            text:
              "I made my own custom dark theme. It's a mix of blues and purples.",
          },
        ],
      },
      {
        id: 1400,
        userName: "ThemeTinkerer",
        text: "Has anyone tried the new Dracula theme? It's sleek!",
      },
    ],
  },
  {
    id: 1411,
    userName: "GadgetGal",
    text: "Any recommendations for a new mechanical keyboard?",
    replyCount: 2,
    replies: [
      {
        id: 1422,
        userName: "SwitchSage",
        text: "Check out the Keychron K6, it's a solid choice!",
        replyCount: 1,
        replies: [
          {
            id: 1433,
            userName: "ClickClackConnoisseur",
            text:
              "Or the Ducky One 2 Mini, if you like a more compact layout.",
          },
        ],
      },
      {
        id: 1444,
        userName: "CapsLockCollector",
        text: "Don't forget to invest in some good keycaps too!",
        replyCount: 1,
        replies: [
          {
            id: 1455,
            userName: "RGBRebel",
            text:
              "Custom keycaps are a must! It's like personalizing your workspace.",
          },
        ],
      },
    ],
  },
];

function App() {
  return (
    <div className="w-full lg:w-3/4 mx-auto">
      <Comments data={data} />
    </div>
  );
}

export default App;
