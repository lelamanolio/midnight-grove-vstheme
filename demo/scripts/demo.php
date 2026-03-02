<?php
declare(strict_types=1);

final class Greeter {
  public function hello(string $name): string {
    return "Hello, {$name}";
  }
}

$g = new Greeter();
echo $g->hello("Midnight Grove") . PHP_EOL;
