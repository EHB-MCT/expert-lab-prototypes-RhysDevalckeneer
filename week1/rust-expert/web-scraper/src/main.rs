// Tutorial: https://www.scrapingbee.com/blog/web-scraping-rust/

extern crate reqwest;
extern crate scraper;

fn main() {

    get_movie_data();
}

fn get_movie_data() {
    println!("webscraper init..");

    let response = reqwest::blocking::get(
        "https://www.imdb.com/list/ls055592025/",
    )
    .unwrap()
    .text()
    .unwrap();

    let document = scraper::Html::parse_document(&response);
    
    // Get titlex
    let title_selector = scraper::Selector::parse("h3.lister-item-header>a").unwrap();
    let titles = document.select(&title_selector).map(|x| x.inner_html());

    titles
        .zip(1..101)
        .for_each(|(item, number)| println!("{}. {}", number, item));
}
