# Old Faithful Project
### see it live: https://kyanite5-faithful.herokuapp.com/

Old Faithful Geyser in Yellowstone National Park is a unique hydrothermal feature that gained its name from its reputation for erupting very regularly approximately every hour. In recent years, the waiting time has fluctuated considerably. Several studies have addressed this relationship using a small dataset of 272 measurements taken in August 1985 (Hardle (1991); Azzalini and Bowman (1990)) and these data are even used as a classic training dataset as part of the R program training manual. In this project, all eruption data available from ranger log transcriptions from 1970 through July 2019 were compiled to create the most complete dataset of Old Faithful eruptions. Several machine learning techniques were utilized, including linear regression, K-means clustering, and polynomial regression to find a predictive relationship between waiting time between eruption and duration of eruption. In the earliest years of Old Faithful observations (1970-1992), robust descriptions of both waiting times and durations were recorded. In more recent years (1992-2019), the National Park Service has recorded more frequent individual waiting time intervals (0-1 minutes) versus a more holistic approach of categorizing of an entire eruption event, which may contain several mini-eruptions. They have also abandoned the practice of recording the duration of eruptions in minutes, and frequently use categories of "long," "short," and "medium" duration instead. This fundamental change in reporting affects the machine learning results, rendering these techniques less useful in making predictions. However, overall one can see from these data that the waiting time between eruptions in minutes has shifted from 50-60 minutes in the 1970's and 1980's, to approximately 90 minutes today. 

