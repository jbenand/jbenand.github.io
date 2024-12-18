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

Using this dataset, we combine traditional methods with advanced tools like GPT-2 for textual analysis and machine learning models such as SVM for classification tasks. These tools allow us to explore trends in sentiment, theme, and representation on a deeper level.

Ultimately, this project is not just about uncovering patterns but also about asking critical questions: What does progress look like? How do we define meaningful representation? And most importantly, is cinema evolving to reflect the diverse realities of its audience, or are we still trapped in old narratives?

Buckle up for a data-driven journey through the history of cinema, what it reveals (or doesn’t) about the role of women on screen, and the stories we’ve been telling ourselves all along.




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

Now, looking at the female-to-male ratio among actors in the top five movie-producing countries since 1920, the picture isn't great for women with the ratio usually staying below 1. Some big swings in the early decades can reflect the social and economic changes of the time. Since the 1960s, things start to level off at quite a low ratio and unfortunately, there's been no real progress since. There is some variation across countries with for example France and the UK that occasionally have slightly better ratios than the US and India. Overall, this graph paints a picture of slow, uneven progress when it comes to the representation of women in global cinema.

But maybe this ratio swings in favor of actresses depending on the genre of the movie ! Let's take a look at the gender repartition for different genders.

{% include_relative assets/plots/repartition_genre.html %}

Well... actresses are still in the minority, no matter the genre or the era ! This under representation seems to plateau between 25% and 40% with an average of just 31.44% of female actresses per movie !

Now what about the actor's age, do we see a tendency depending on the genre ?

{% include_relative assets/plots/actors_age.html %}

Regardless of the period, women on screen tend to be younger than their male counterpart. This can be see with some explicit examples such as in "Pretty Woman" from 1990 where the male Lead (Richard Gere) was 41 years old and the female Lead (Julia Roberts) was 23 years old. 
This classic romantic comedy has an 18-year gap between the leads. While it's a fictional story, the age disparity became a hallmark of the genre during that era.

What could explain such noticeable difference in averages ? Could it be related to societal expectations, casting preferences or even the types of roles offered to women compared to men. This pattern raises intriguing questions about representation and the evolution of gender dynamics in the film industry. Let us investigate women representation in movies to deepen our understanding of such dynamics.

# Women representation in movies

## Bechdel test

How can we measure the representation of women in movies ? One metric that is commonly used is the **Bechdel Test**. You might have heard of it, it's a simple yet striking measure of the representation of women in movies. Here's how it works: for a film to pass the Bechdel Test, it needs to meet three criteria:

1. It must have at least two named female characters
2. These women must talk to each other
3. And their conversation must be about something other than a man

Sounds straightforward, right ? You'd think most movies would pass with flying colors, but surprisingly, many don't ! This test isn't about calling out individual films but rather highlighting larger trends in storytelling and representation. Now, passing the Bechdel Test doesn't automatically mean a movie is feminist or inclusive, nor does failing it make a film inherently problematic. Instead, it's a way to spark discussion about ho women are portrayed on screen and whether they are given meaningful rles beyond supporting male characters.

While other tests, such as the Mako Mori Test—which evaluates whether a female character has her own narrative arc independent of supporting a male character—or the DuVernay Test, which assesses the inclusion of characters of color in fully realized roles, provide valuable insights, we chose to focus on the Bechdel Test for its simplicity and widespread use. This makes it an accessible starting point for exploring broader trends in gender representation.

## Classification

We use this Bechdel Test result to classify if a movie is considered as having a good representation of women or not. However, not every movie in the dataset that we are provided with has a Bechdel Test result. Thus, we look through the plot summaries of the movies on which we have Bechdel Test information to find out the defining words and themes of movies that pass and fail the test and then search for these elements in the plot summaries of the other movies of the dataset to classify them as having a good representation of women or not.

Although the Bechdel Test result is a popular measure of classify the representation of women in movies, it is also inherently flawed. Its major flaw that it does not take into account the subject matter (the subject of the conversation) and hence movies that are widely considered as sexist can still pass the test (e.g. *Fifty Shade of Grey* which is known to promote abuse passes the test) while other movies with feminist undertones can still fail the test (e.g. *Eternal Sunshine of the Spotless Mind*). Another major flaw is that the dataset we used to get Bechdel Test results data is user-submitted which leads to certain cognitive biases (e.g. some users might only add movies that pass the Bechdel Test and hence cause an imbalance in the dataset). 
For these reasons, we create another metric to define if a movie has a good representation of women : the movie has to pass the Bechdel **AND** have at least half of its cast to be female actresses. We then use this classification method to find the relevant words and themes to apply the search every other movie of the dataset.


In order to represent these 2 metrics, we used 2 different methods : GPT2 to classify feminist movies based on the Bechdel test and classification with women proportion taken into account with SVM.

1) We turned to GPT-2, a pre-trained language model that specializes in generating and understanding natural language. GPT-2 was chosen for its ability to analyze the semantics of movie plot summaries, helping us identify nuanced themes and context that go beyond simple keyword matching. By fine-tuning GPT-2 on a custom dataset of feminist movies, we were able to improve its ability to recognize feminist elements in films, providing a richer and more accurate classification than the Bechdel Test alone.

This method is especially valuable in addressing the limitations of the Bechdel Test, which can miss films with feminist messages that might not meet its criteria. GPT-2 allows us to go beyond surface-level analysis and dive deeper into the language of movie summaries, identifying key themes, character arcs, and narrative structures that reflect feminist ideas.

2) SVM was selected as it excels in handling binary classification tasks using numerical and categorical input features. For the second metric—where female cast proportion is included—SVM provides a straightforward and interpretable model to classify movies with high accuracy.

Two different models:

| Measure         |  Model 1 (GPT-2) | Model 2 (SVM) |
|--------------------|---------------------|-----------------|
| Accuracy            | 0.82               | ???             |
| F1 Score            | 0.61                   | ???              | 


The GPT-2 model achieved an accuracy of 0.82 and an F1 score of 0.61, indicating its strength in understanding natural language but leaving room for improvement in identifying less explicit feminist elements. The SVM model, trained on cast proportion and Bechdel results, provided an alternative approach, achieving an accuracy of [???] and an F1 score of [???]. Together, these models offer complementary insights into the representation of women in films, with GPT-2 focusing on semantic analysis and SVM addressing numerical and categorical patterns.

<div style="display: flex; justify-content: space-around; align-items: center;">
    <div>
        {% include_relative assets/plots/svm_confusion_matrix.html %}
    </div>
    <div>
        {% include_relative assets/plots/gpt2_confusion_matrix.html %}
    </div>
</div>

Based on the confusion matrices, GPT-2 outperforms the SVM model in key areas, particularly in identifying the 'Feminist' class correctly. It has significantly fewer false negatives (609 compared to 1176), demonstrating better sensitivity. This is crucial because minimizing missed detections of the 'Feminist' class is likely more important in our application. While SVM performs slightly better in reducing false positives, the higher accuracy and stronger performance on the 'Feminist' class make GPT-2 the more suitable model for our needs. Given these results, it makes sense to concentrate on GPT-2 moving forward and focus on fine-tuning it further to optimize performance.


<!-- {% include_relative assets/plots/two_models.html %} -->

{% include_relative assets/plots/two_models_two_plots.html %}

Do you see what I see ? That's right -- progress ! Even though the number of films produced each year has skyrocketed, the percentage of movies with women well represented has also steadily increased over time, nearing almost 40% with the second classification method ! This classification difference creates quite a big difference as they do not always classify the same movie in the same category as can be seen on the Venn diagram below.

<figure class="center">
    <img src="/assets/img/venn_diagram.png" alt="venn_diagram" class="center" width="600">
        <figcaption>
        Venn Diagram of both models
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

<div style="display: flex; justify-content: space-between; align-items: center;">
  <div style="flex: 1; margin-right: 10px;">
    {% include_relative assets/plots/feminism_percentage.html %}
  </div>
  <div style="flex: 1; margin-left: 10px;">
    {% include_relative assets/plots/feminism_linear_regression.html %}
  </div>
</div>


Surprisingly, there are quite a lot of feminist movies ! 

Let’s look at these percentages by genre: Romance films rank first in terms of the percentage of feminist films, reaching about 70%! Surprising? Musical films come in second on average. These types of films generally feature a man and a woman as leads, without one being there to complement the other. In contrast, only 30% of action and adventure films, which are often male-driven, are considered feminist.We find roughly the same ranking for films that pass the Bechdel test.

{% include_relative assets/plots/percentage_feminism_all_periods.html %}

{% include_relative assets/plots/combined_oscar_feminist_pie_charts.html %}

Ladies and gentlemen, once again, the Oscars! 🎬 Half of the nominees are feminist—pretty impressive! But when it comes to taking home the Best Picture award? Let’s just say the numbers aren’t quite ready for their acceptance speech.This begs the question: Is it enough to be nominated, or will we see a shift where feminist films become the new norm for winners?


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

#### Topic Detection Insights
To further investigate these patterns, we performed topic detection to uncover the themes prevalent in both feminist and non-feminist movie summaries.

{% include_relative assets/plots/lda_visualization.html %}

#### Intertopic Distance Map
By visualizing the intertopic distance using multidimensional scaling, we identified two dominant principal components (PC1 and PC2). These components provide a deeper understanding of how topics diverge:
- PC1 aligns with themes containing negative sentiment, such as loss, conflict, or hardship.
- PC2 highlights themes with positive sentiment, such as love, triumph, or resolution.
This dichotomy reveals why the average compound scores for feminist and non-feminist movies appear neutral despite their underlying asymmetry. Both categories contain a mix of polarizing themes, which, when averaged, cancel out extreme sentiments.

These findings present a nuanced understanding of the sentiment and thematic differences between feminist and non-feminist movies. While both categories exhibit a neutral overall tone, the underlying topics reveal a blend of positive and negative connotations, with feminist movies leaning toward optimism and non-feminist movies reflecting more somber themes.

## Graph theory

Graph theory gives a quite powerful framework to analyze complex relationships and structures within movie datasets. By representing actors, characters, or scenes as nodes and their interactions as edges, we can uncover patterns of collaboration, centrality, and representation. This approach enriches our analysis by offering a deeper understanding of how gender dynamics are interwoven within the fabric of storytelling.
This approach can help us understand how feminist and non-feminist movies are linked and what features determine if a movie is feminist or not.

First of all, we can compare the three different models that were trained. In this graph, each model is linked to all of the movies it has predicted as feminist. We can see that only a fraction of the movies are predicted as feminist by all three models. This shows how complex it can be to define a feminist movie.

{% include_relative assets/plots/graph_movie_model_predictions.html %}

But how does the model determine if a movie is feminist or not ? One way of understanding how the third model determines its predictions is by finding the main topics/themes in the summary as keyphrases. Then, each set of words in a single keyphrase can be linked and plotted into a network to show the interactions between the topics. 
We have implemented this and done a keyphrase search with the help of the module KeyBERT in the summaries of 20 movies predicted as feminist by the model. KeyBERT allows us to obtain keyphrases of 2 words that are representative of the main text such as : ('katniss volunteers', 0.5623) for the summary of the Hunger games, where the number represents the relevance score.  Finally, by linking these words together, a network graph can be plotted.

{% include_relative assets/plots/movie_topic_interactions.html %}

By selecting movies and looking around in the plots, a trend can be observed. Usually, a feminine character is represented and action words are linked to it. Of course, sometimes the plots do not bring much information as they rely on the summary.


Another way of understanding the differences between feminist and non-feminist movies is by looking at the main features provided by the dataset such as box office revenue, runtime, year, country, languages and genre. Using a parallel coordinates plot is a great way of viewing how a set of feminist and non-feminist movies vary within these features and seeing the differences between both groups.


<div style="width: 100%; height: 600px;">
    {% include_relative assets/plots/parallel_plot.html %}
</div>

The plot was created on a subset of 1’000 movies for each group (feminist or not). It can be observed that there is a strong similarity in movie runtime and box office revenue whereas the countries, languages and genre vary greatly within and in between the groups. This shows that feminist movies are not that different compared to others with regards to the categorical features but rather depend on the movie plots and the message that they portray.



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


# Conclusion 

In this exploration of women’s representation in cinema, we’ve navigated through various metrics, from the Bechdel Test with more advanced machine learning techniques like GPT-2 and SVM, to understand how women are portrayed on screen across time and genres. While there has been progress, the data reveals that gender inequality remains a persistent issue in the film industry, with women still underrepresented in major roles and often cast in secondary or stereotypical positions.

Despite the flaws in the Bechdel Test, these methods have provided valuable insights into broader trends in representation. By also examining sentiment, genre, and country-specific data, we’ve gained a more nuanced understanding of how feminism and female representation intersect with cultural and cinematic factors.

Ultimately, this analysis raises important questions about how far we've come and how much further we have to go. While the percentage of feminist films and those with strong female characters is on the rise, the industry still has a long way to go to achieve true gender equality on screen. This research serves as a step toward further exploration and, hopefully, continued progress in the portrayal of women in cinema.

And as we wrap up, let’s channel Wonder Woman—lassoing the truth about representation and smashing the stereotypes, one reel at a time. 💪🎥




<figure class="center">
    <img src="/assets/img/galgadot.gif" alt="galgadot" class="center" width="600">
        <figcaption>
            Gal Gadot in Wonderwoman
        </figcaption>
</figure>
