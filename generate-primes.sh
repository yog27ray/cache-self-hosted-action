a=10;
mkdir -p primes
for ((x = 1; x <= a; x++)); do
  if [[ $x%2 -eq 0 ]]; then
    echo "$x" > "primes/$x.txt"
  fi
done
