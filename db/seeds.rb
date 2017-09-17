Quote.delete_all

Quote.create! (  
  [
    {
      text: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde"
    },
    {
      text: "Two things are infinite: the universe and human stupidity; " \
            "and I'm not sure about the universe.",
      author: "Albert Einstein"
    },
    {
      text: "So many books, so little time.",
      author: "Frank Zappa"
    },
    {
      text: "Be the change that you wish to see in the world",
      author: "Mahatma Gandhi"
    },
    {
      text: "If you tell the truth, you don't have to remember anything.",
      author: "Mark Twain"
    }
  ]
)
puts "Quotes seeded!"

HackerNews.delete_all

HackerNews.create! (
  [
      {
        heading: "Bing",
        link: "https://www.bing.com/"
      }, 
      {
        heading: "Bing2",
        link: "https://www.bing.com/"
      },
      {
        heading: "Bing3",
        link: "https://www.bing.com/"
      }
  ]
)

puts "HackerNews seeded!"