function LoginInput() {
  return (
    <form>
      <div className="mb-[22px]">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-5 py-3 text-base transition bg-transparent border rounded-md outline-none border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 placeholder:text-dark-6 focus:border-primary dark:focus:border-primary focus-visible:shadow-none"
        />
      </div>
      <div className="mb-[22px]">
        <input
          type="password"
          placeholder="Password"
          className="w-full px-5 py-3 text-base transition bg-transparent border rounded-md outline-none border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 placeholder:text-dark-6 focus:border-primary dark:focus:border-primary focus-visible:shadow-none"
        />
      </div>
      <div className="mb-9">
        <input
          type="submit"
          value="Sign In"
          className="w-full px-5 py-3 text-base text-white transition duration-300 ease-in-out border rounded-md cursor-pointer border-primary bg-primary hover:bg-blue-dark"
        />
      </div>
    </form>
  );
}

export default LoginInput;
