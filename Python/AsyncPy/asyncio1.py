import asyncio


async def main():
    task = asyncio.create_task(other_function())
    print("a")
    await task
    print("b")


async def other_function():
    print("1")
    await asyncio.sleep(2)
    print("2")


asyncio.run(main())
