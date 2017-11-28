class Hamming

  def self.compute(bases1, bases2)
    raise ArgumentError unless bases1.length == bases2.length
    count = 0
    index = 0
    bases1.length.times do
      if bases1[index] == bases2[index]
        index += 1
      else
        index += 1
        count += 1
      end
    end
    count
  end

end

class BookKeeping
  VERSION = 3
end
