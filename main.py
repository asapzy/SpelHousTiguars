# Import the module
import instaloader
# Create an instance of Instaloader class
bot = instaloader.Instaloader()
# Login with username and password in the script
bot.login("tiguarbot", "hackHPC22")
# load the hashtag
# hashtag = instaloader.Hashtag.from_name(bot.context,'sanfrancisco')
# # load the post with 'sanfrancisco' hashtag into a generator object
# python_posts = hashtag.get_posts()
def tops_posts_from_hashtag(hashtag_name: str, max_count: int):
    """
    A function that downloads top {max_count} posts from a hashtag
    """
    # Load the hashtag object into a variable
    hashtag = instaloader.Hashtag.from_name(bot.context, hashtag_name)
    # Get top posts in a generator
    posts = hashtag.get_top_posts()
    for index in range(1, max_count + 1):
        try:
            # Download the post
            bot.download_post(next(posts), target=f'{hashtag_name}_{index}')
        except:
            break # If there are any errors, we break out of the loop

tops_posts_from_hashtag('sanfrancisco', 4)