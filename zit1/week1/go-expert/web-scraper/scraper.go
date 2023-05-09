// Tutorial: https://www.youtube.com/watch?v=NU4OlJVj1gs

package main

import (
	"fmt"
	"github.com/gocolly/colly"
)

type item struct {
	Name 	string `json:name`
	Price 	string `json:price`
	ImgUrl 	string `json:imageurl`
}

func main() {
	c := colly.NewCollector(colly.AllowedDomains("www.torfs.be"))

	c.OnHTML("a[href]", func(h *colly.HTMLElement){
		fmt.Println(h.Text)
	})

	c.Visit("www.torfs.be/nl/heren/schoenen/")
}