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

Sounds straightforward, right ? You'd think most movies would pass with flying colors, but surprisingly, many don't ! This test isn't about calling out individual films but rather highlighting larger trends in storytelling and representation. Now, passing the Bechdel Test doesn't automatically mean a movie is feminist or inclusive, nor does failing it make a film inherently problematic. Instead, it's a way to spark discussion about ho women are portrayed on screen and whether they are given meaningful rles beyond supporting male characters.

## Classification

We use this Bechdel Test result to classify if a movie is considered as having a good representation of women or not. However, not every movie in the dataset that we are provided with has a Bechdel Test result. Thus, we look through the plot summaries of the movies on which we have Bechdel Test information to find out the defining words and themes of movies that pass and fail the test and then search for these elements in the plot summaries of the other movies of the dataset to classify them as having a good representation of women or not.

Although the Bechdel Test result is a popular measure of classify the representation of women in movies, it is also inherently flawed. Its major flaw that it does not take into account the subject matter (the subject of the conversation) and hence movies that are widely considered as sexist can still pass the test (e.g. *Fifty Shade of Grey* which is known to promote abuse passes the test) while other movies with feminist undertones can still fail the test (e.g. *Eternal Sunshine of the Spotless Mind*). Another major flaw is that the dataset we used to get Bechdel Test results data is user-submitted which leads to certain cognitive biases (e.g. some users might only add movies that pass the Bechdel Test and hence cause an imbalance in the dataset). 
For these reasons, we create another metric to define if a movie has a good representation of women : the movie has to pass the Bechdel **AND** have at least half of its cast to be female actresses. We then use this classification method to find the relevant words and themes to apply the search every other movie of the dataset.


In order to represent these 2 metrics, we used 2 different methods : GPT2 to classify feminist movies based on the Bechdel test and classification with women proportion taken into account with SVM:

Two different models:

| Measure         |  Model 1 (GPT-2) | Model 2 (SVM) |
|--------------------|---------------------|-----------------|
| Accuracy            | 0.82               | ???             |
| F1 Score            | 0.61                   | ???              | 



<!-- {% include_relative assets/plots/two_models.html %} -->

{% include_relative assets/plots/two_models_two_plots.html %}

Do you see what I see ? That's right -- progress ! Even though the number of films produced each year has skyrocketed, the percentage of movies with women well represented has also steadily increased over time, nearing almost 40% with the second classification method ! This classification difference creates quite a big difference as they do not always classify the same movie in the same category as can be seen on the Venn diagram below.

<figure class="center">
    <img src="/assets/img/venn_diagram.png" alt="venn_diagram" class="center" width="600">
        <figcaption>
        </figcaption>
</figure>

### Proportion of Movies that pass the Test Bechdel per Genre
### Oscar Winners and Nominees 

The Bechdel Test provides a way to assess the representation of women in a film, but it remains limited in evaluating the depth or significance of their roles. For instance, Pacific Rim fails the test due to its lack of female characters, yet Mako Mori plays a pivotal role in the story, serving as more than just a supporting figure to the male protagonist. 

<figure class="center">
    <img src="/assets/img/makomori.gif" alt="makomori" class="center" width="600">
        <figcaption>
            Makomori in action
        </figcaption>
</figure>

Similarly, Éowyn from The Lord of the Rings stands out as a strong character, despite the film’s broader failure to pass the test. And for example,Twilight passed the test, but Bella is not often considered as a strong female character, as it is said that she relies on men to "save and protect" her. 
<figure class="center">
    <img src="/assets/img/twilight.gif" alt="twilight" class="center" width="600">
        <figcaption>
            Bella saved by Edward
        </figcaption>
</figure>

# Feminism in movies 

As the bechdel test has proven itself not being deterministic, we decided to look at feminism in a rather different way… We created our own dataset of feminist movies based on different websites on the internet (each movie of the dataset we created is widely considered as conveying a feminist message). Here below you can see a sample of the movies we have extracted, of the set of images we have put together ourselves. In order to complement this, we used the same number of sample of films that have obtained 0 at the bechdel test. In total, our dataset is made of 296 feminist movies and 296 movies that fail the Bechdel Test. We use this dataset to fine-tune a pre-trained GPT2 model to find the most important features of a feminist movie (and also the features that make a "macho" movie), working mostly on the semantics of the sentences, then apply this model to the entire movie dataset to classify a movie as feminist or not.

<figure class="center">
    <img src="/assets/img/collage_feminist_movies.jpg" alt="Feminism movies collected" class="center" width="600">
        <figcaption>
            Feminism movies collected
        </figcaption>
</figure>

## General Feminism analysis

Let us apply the same analysis framework that we used for the representation of women in movies :

{% include_relative assets/plots/feminism_percentage.html %}
{% include_relative assets/plots/feminism_linear_regression.html %}

Surprisingly, there are quite a lot of feminist movies ! 

Let’s look at these percentages by genre: Romance films rank first in terms of the percentage of feminist films, reaching about 70%! Surprising? Musical films come in second on average. These types of films generally feature a man and a woman as leads, without one being there to complement the other. In contrast, only 30% of action and adventure films, which are often male-driven, are considered feminist.We find roughly the same ranking for films that pass the Bechdel test.

{% include_relative assets/plots/percentage_feminism_all_periods.html %}


<!-- {% include_relative assets/plots/combined_oscar_feminist_pie_charts.html %}-->

Ladies and gentlemen, once again, the Oscars! 🎬 Half of the nominees are feminist—pretty impressive! But when it comes to taking home the Best Picture award? Let’s just say the numbers aren’t quite ready for their acceptance speech.This begs the question: Is it enough to be nominated, or will we see a shift where feminist films become the new norm for winners?

<!-- {% include_relative assets/plots/feminist_movies_interactive_dataset_created.html %} -->


## Sentiment Analysis


Do feminist movies portray a more positive and happy scenario ? One would think that there could be a slight trend towards these kinds of movies or on the contrary that it portrays rebellion and more negative plots. 
We have analysed the movie summaries from all of the movies predicted as feminist by the 3 ML models created as well as those predicted non-feminist and found a deceiving result : there is no apparent difference in sentiment between feminist and non feminist movies.

<div style="display: flex; justify-content: space-around; align-items: center;">
    <figure style="margin: 0; text-align: center;">
        <img src="/assets/img/avg_sentiment.png" alt="avg sentiment" width="600">
        <figcaption>
            Average sentiment
        </figcaption>
    </figure>

    <figure style="margin: 0; text-align: center;">
        <img src="/assets/img/compound_scores_plot.png" alt="compound sentiment" width="600">
        <figcaption>
            Compound scores
        </figcaption>
    </figure>
</div>

By using the sentiment intensity analyser of VADER, we were able to determine whether the movie summaries were presenting a positive, neutral or negative sentiment. The first plot shows that both feminist and non-feminist movies contain mostly neutral sentiment summaries and that feminist movies tend to have a slightly higher rate of positive scores whereas non-feminist movies will tend towards slightly more negative sentiments.


The second plot shows the compound scores which illustrate the mean sentiment score value, a positive value represents positive and similar for negative scores and sentiments. Once again, both categories have an average mean score that represents neutral movies and non-feminist movies have a non-symmetric distribution towards negative sentiment.

This surprising result leaves us wondering why, therefore in order to better understand it, we have performed topic detection and found results in both cases.


{% include_relative assets/plots/lda_visualization.html %}

By extracting the 2 principal components of the words, we observe that clearly in both cases there is a connotation : negative in PC1 and positive in PC2. This would explain them both being averaged out.

## Graph theory

Using graph theory can help us understand how feminist and non-feminist movies are linked and what features determine if a movie is feminist or not.
First of all, we can compare the three different models that were trained. In this graph, each model is linked to all of the movies it has predicted as feminist. We can see that only a fraction of the movies are predicted as feminist by all three models. This shows how complex it can be to define a feminist movie.

{% include_relative assets/plots/graph_movie_model_predictions.html %}

One way to understand the predictions is by finding the main topics/themes in the summary, linking them and plotting this into a network to show the interactions between these topics. We have implemented this by doing a keyphrase search in summaries of movies predicted feminist by the last model. The module KeyBERT allows to achieve this and obtain results such as : [('katniss peeta', 0.5887), ('tribute katniss', 0.5791), ('peeta katniss', 0.5781), ('katniss volunteers', 0.5623), ('turning katniss', 0.5519)] for the summary of the Hunger games, where the number represents the intensity.  Finally, using graphs and linking each word from a keyphrase together, we can analyse different important themes and understand links in movies.

{% include_relative assets/plots/movie_topic_interactions.html %}

{% include_relative assets/plots/parallel_plot.html %}




<h1>Welcome to Movie Summaries</h1>
Finally, we have designed a simple tool which allows to pick a movie among a small subset, read its summary and visualize gpt2's prediction in the feminism response part. Have fun navigating!

<p>Select a movie from the dropdown to view its summary and feminism response:</p>

<!-- Dropdown for selecting a movie -->
<select id="movieDropdown">
  <option value="">Select a movie</option>
</select>

<div id="movieSummary">
  <!-- Movie Summary and Feminism Response will be displayed here -->
</div>

<script>
// Fetch the movies data from the JSON file
fetch('{{ "/assets/plots/movies_summaries_feminism.json" | relative_url }}')
  .then(response => response.json())
  .then(movies => {
    // Populate the dropdown with movie names
    const dropdown = document.getElementById('movieDropdown');
    movies.forEach(movie => {
      const option = document.createElement('option');
      option.value = movie['Movie name'];
      option.text = movie['Movie name'];
      dropdown.appendChild(option);
    });

    // Event listener to update movie summary on dropdown change
    dropdown.addEventListener('change', function() {
      const selectedMovie = this.value;
      const movieSummaryDiv = document.getElementById('movieSummary');

      if (selectedMovie) {
        // Find the selected movie from the array
        const movie = movies.find(m => m['Movie name'] === selectedMovie);
        
        // Display movie summary and feminism response
        movieSummaryDiv.innerHTML = `
          <h2>${movie['Movie name']}</h2>
          <p><strong>Summary:</strong> ${movie['Summaries']}</p>
          <p><strong>Feminism Response:</strong> ${movie['feminism response']}</p>
        `;
      } else {
        movieSummaryDiv.innerHTML = ''; // Clear content if no movie is selected
      }
    });
  })
  .catch(error => console.log('Error loading movie data:', error));
</script>
