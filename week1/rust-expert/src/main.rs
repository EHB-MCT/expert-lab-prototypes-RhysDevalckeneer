// import dependency 
use ferris_says::say;
// std -> used to get input or give output
use std::io::*;

fn main() {
    // get_answer();
    
    // Other functions
    hello_world();
    run_crab();
}

fn hello_world() {
    println!("Hello, world!");
}

fn run_crab() {
    let stdout = stdout();
    let message = String::from("Programming jokes are fun... \n\n\n\n\n ... but only when executed properly.");
    let width = message.chars().count();

    let mut writer = BufWriter::new(stdout.lock());
    say(message.as_bytes(), width, &mut writer).unwrap();
}

/* 
fn get_answer() {
    println!("Enter the number of the function you want to execute.. \n 
    You can choose between:
    1. hello_world
    2. run_crab");
    let mut given_answer = String::new(); // Declare mutable input string
    stdin().read_line(&mut given_answer)
        .ok()
        .expect("Failed to read answer..");

    // Check answer
    let result = match given_answer {
        "run_crab" => { run_crab(); },
        "hello_world" => { hello_world(); },

        _ => { println!("Unknown function.."); }
    };
}
*/