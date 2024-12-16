---
layout: page
title: "Lights, Camera, Inequality: The Story of Women in Cinema"
cover-img: /assets/img/feminism_home_page.jpg
---

# Introduction

Cinema is so much more than just entertainment. It’s a mirror (albeit sometimes a distorted one) of our society, its norms, its values… and, unfortunately, its inequalities. Since its early days, women on screen haven’t always had the spotlight: often confined to secondary or stereotypical roles, they’ve long remained in the shadows of male characters.

But things are changing, right ? Or maybe not so much ? That’s exactly what we’re here to explore. We’ll dive into how women are represented in films: Are there more female roles today ? Are they better written ? Are modern movies truly more “feminist,” or is that just a trendy buzzword ?

To find out, we’re going to dig into the data. We’ll count actresses, see if they outshine their male counterparts, analyze film themes, and even measure how many pass the famous Bechdel test. We’ll also tackle more specific questions: Do films from certain countries or genres do better than others ? Do feminist blockbusters even exist ?

And, because it’s always fun, we’ll try to answer the big question: What exactly makes a “feminist film” ? By exploring the data, we hope to find answers… or maybe even uncover new questions.

So, buckle up for a journey through the history of cinema and what it reveals (or doesn't) about the role of women on screen.

To dive into these questions, we have access to data on over 80,000 films, covering details like release year, country of production, genre, plots, actor information, and much more.


<figure class="center">
    <img src="/assets/img/fallen_angels.jpg" alt="Fallen angels by Wong Kar Wai" class="center" width="600">
        <figcaption>
            Fallen angels by Wong Kar Wai
        </figcaption>
</figure>

# General Analysis

## Proportion of actresses over time

To ease into things, we'll start by finding the average number of actresses and actors per year and per movie. It's not the most exciting part but hey, we've got to start somewhere...

{% include_relative assets/plots/nb_actors.html %}

Each curve shows the average number of male and female actors per movie. Although the number of female actors per movie seems to have increased over the year, it remains lower than the number of male actors on average since 1900 (there are on average twice as many male actors on screen as female actors).

{% include_relative assets/plots/female_to_male_actor_ratio_per_country.html %}

Now, looking at the female-to-male ratio among actors in the top five movie-producing countries since 1920, the picture isn't great for women with the ratio usually staying below 1. Some big swings in the early decades can reflect the social and economic changes of the time. Since the 1960s, things start to level off at quite a low ratio and unfortunately, there's been no real progress since. There is some variation across countries with for example France and the UK that occasionnally have slightly better ratios than the US and India. Overall, this graph paints a picture of slow, uneven progress when it comess to the representation of women in global cinema.

But maybe this ratio swings in favor of actresses depending on the genre of the movie ! Let's take a look at the gender repartition for different genders.

{% include_relative assets/plots/repartition_genre.html %}

Well... actresses are still in the minority, no matter the genre or the era ! This under representation seems to plateau between 25% and 40% with an average of just 31.44% of female actresses per movie !

Now what about the actor's age, do we see a tendency depending on the genre ?

{% include_relative assets/plots/actors_age.html %}

Regardless of the period, women on screen tend to be younger than their male counterprt. What could explain such noticeable difference in averages ? Could it be related to societal expectations, casting preferences or even the types of roles offered to women copared to men. This pattern raises intriguing questions about representation and the evolution of gender dynamics in the film industry. Let us investigate women representation in movies to deepen our understanding of such dynamics.

# Women representation in movies

## Bechdel test

How can we measure the representation of women in movies ? One metric that is commonly used is the **Bechdel Test**. You might have heard of it, it's a simple yet striking measure of the representation of women in movies. Here's how it works: for a film to pass the Bechdel Test, it needs to meet three criteria:

1. It must have at least two named female characters
2. These women must talk to each other
3. And their conversation must be about something other than a man

Sounds straightforward, right ? You'd think most movies would pass with flying colors, but surprisingly, many don't ! This test isn't about calling out individual films but rather highlighting larger trends in storytelling and representation. Now, passing the Bechdel Test doesn't automatically mean a movie is feminist or inclusive, nor does fialing it make a film inherently problematic. Instead, it's a way to spark discussion about ho women are portrayed on screen and whether they are given meaningful rles beyond supporting male characters.

Two different models:

<div class="button-container">
  <button id="button1">Model 1</button>
  <button id="button2">Model 2</button>
</div>

<div id="plot-container">
  <iframe id="plot-frame" src="assets/plots/feminist_movies_interative_gpt.html"></iframe>
</div>

## 


<script src="assets/js/plot-switcher.js"></script>
