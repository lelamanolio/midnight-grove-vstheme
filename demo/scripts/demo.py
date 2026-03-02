from __future__ import annotations

from dataclasses import dataclass
from typing import Optional

@dataclass
class User:
    id: int
    name: str
    active: bool = True

def greet(u: User) -> str:
    return f"Hello, {u.name} (#{u.id})"

def main() -> None:
    u = User(1, "Lela")
    print(greet(u))

if __name__ == "__main__":
    main()
