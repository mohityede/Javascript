def announce(f):
    def wrapper():
        print("its starting...")
        f()
        print("funtion completed.")
    return wrapper

@announce
def hello():
    print("hello mohit")

hello()