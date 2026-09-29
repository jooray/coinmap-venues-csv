# coinmap-venues-csv

<!-- jooray-links:start -->
## No longer maintained

I no longer use this and no longer maintain it. The repository is archived and stays here read-only.

> For what I am building now, see my [project showcase](https://juraj.bednar.io/showcase/).
>
> I also write books and work on things that are not code: my cypherpunk novel
> [Tamers of Entropy](https://tamersofentropy.net/) ([trailer](https://tamersofentropy.net/#trailer)),
> my English podcast [Option Plus](https://optionplus.io/), [my blog](https://juraj.bednar.io/en/blog-en/),
> and [everything else](https://juraj.bednar.io/en). There is also
> [more about me](https://juraj.bednar.io/en/about-me/).
<!-- jooray-links:end -->

This project allows you to get CSV of cryptocoin-accepting venues in your area from [coinmap](https://coinmap.org/)

## Installation

Install npm dependencies:

```bash
npm install
```

## Running

First find the area which you want to return your area for. Maybe go to [coinmap.org](https://coinmap.org/) and center the map on northwest and then southeast corner of the area you want to get venues for. For both of them note latitude and longtitude numbers (the first and second weird number in the URL field).

For example for Bratislava, Slovakia region, you would run this command like this:

```bash
node index.js '48.04621395' '17.01695859' '48.27869481' '17.52690017' > venues.csv
```
